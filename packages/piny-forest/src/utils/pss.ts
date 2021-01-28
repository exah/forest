import { Properties as BaseCSSProperties } from 'csstype'
import { CSSObject, CSSInterpolation } from '@emotion/serialize'

import { Theme as BaseTheme } from '../types'
import { get, isObject, isPrimitive, isPropertyKey } from './helpers'

const AXIS = /^(\w+)(X|Y)(\w+)?$/
const SCALES = {
  color: 'colors',
  backgroundColor: 'colors',
  borderColor: 'colors',
  caretColor: 'colors',
  columnRuleColor: 'colors',
  opacity: 'opacities',
  transition: 'transitions',
  transitionDuration: 'durations',
  transitionTimingFunction: 'timings',
  animationDuration: 'durations',
  animationTimingFunction: 'timings',
  margin: 'space',
  marginTop: 'space',
  marginRight: 'space',
  marginBottom: 'space',
  marginLeft: 'space',
  marginX: 'space',
  marginY: 'space',
  marginBlock: 'space',
  marginBlockEnd: 'space',
  marginBlockStart: 'space',
  marginInline: 'space',
  marginInlineEnd: 'space',
  marginInlineStart: 'space',
  padding: 'space',
  paddingTop: 'space',
  paddingRight: 'space',
  paddingBottom: 'space',
  paddingLeft: 'space',
  paddingX: 'space',
  paddingY: 'space',
  paddingBlock: 'space',
  paddingBlockEnd: 'space',
  paddingBlockStart: 'space',
  paddingInline: 'space',
  paddingInlineEnd: 'space',
  paddingInlineStart: 'space',
  scrollPadding: 'space',
  scrollPaddingTop: 'space',
  scrollPaddingRight: 'space',
  scrollPaddingBottom: 'space',
  scrollPaddingLeft: 'space',
  scrollPaddingX: 'space',
  scrollPaddingY: 'space',
  inset: 'space',
  insetBlock: 'space',
  insetBlockEnd: 'space',
  insetBlockStart: 'space',
  insetInline: 'space',
  insetInlineEnd: 'space',
  insetInlineStart: 'space',
  top: 'space',
  right: 'space',
  bottom: 'space',
  left: 'space',
  gridGap: 'space',
  gridColumnGap: 'space',
  gridRowGap: 'space',
  gap: 'space',
  columnGap: 'space',
  rowGap: 'space',
  fontFamily: 'fonts',
  fontSize: 'fontSizes',
  fontWeight: 'fontWeights',
  lineHeight: 'lineHeights',
  letterSpacing: 'letterSpacings',
  border: 'borders',
  borderTop: 'borders',
  borderRight: 'borders',
  borderBottom: 'borders',
  borderLeft: 'borders',
  borderWidth: 'borderWidths',
  borderStyle: 'borderStyles',
  borderRadius: 'radii',
  borderTopRightRadius: 'radii',
  borderTopLeftRadius: 'radii',
  borderBottomRightRadius: 'radii',
  borderBottomLeftRadius: 'radii',
  borderTopWidth: 'borderWidths',
  borderTopColor: 'colors',
  borderTopStyle: 'borderStyles',
  borderBottomWidth: 'borderWidths',
  borderBottomColor: 'colors',
  borderBottomStyle: 'borderStyles',
  borderLeftWidth: 'borderWidths',
  borderLeftColor: 'colors',
  borderLeftStyle: 'borderStyles',
  borderRightWidth: 'borderWidths',
  borderRightColor: 'colors',
  borderRightStyle: 'borderStyles',
  borderBlock: 'borders',
  borderBlockEnd: 'borders',
  borderBlockEndStyle: 'borderStyles',
  borderBlockEndWidth: 'borderWidths',
  borderBlockStart: 'borders',
  borderBlockStartStyle: 'borderStyles',
  borderBlockStartWidth: 'borderWidths',
  borderBlockStyle: 'borderStyles',
  borderBlockWidth: 'borderWidths',
  borderEndEndRadius: 'radii',
  borderEndStartRadius: 'radii',
  borderInline: 'borders',
  borderInlineEnd: 'borders',
  borderInlineEndStyle: 'borderStyles',
  borderInlineEndWidth: 'borderWidths',
  borderInlineStart: 'borders',
  borderInlineStartStyle: 'borderStyles',
  borderInlineStartWidth: 'borderWidths',
  borderInlineStyle: 'borderStyles',
  borderInlineWidth: 'borderWidths',
  borderStartEndRadius: 'radii',
  borderStartStartRadius: 'radii',
  outlineColor: 'colors',
  boxShadow: 'shadows',
  textShadow: 'shadows',
  zIndex: 'zIndices',
  width: 'sizes',
  minWidth: 'sizes',
  maxWidth: 'sizes',
  height: 'sizes',
  minHeight: 'sizes',
  maxHeight: 'sizes',
  flexBasis: 'sizes',
  size: 'sizes',
  blockSize: 'sizes',
  inlineSize: 'sizes',
  maxBlockSize: 'sizes',
  maxInlineSize: 'sizes',
  minBlockSize: 'sizes',
  minInlineSize: 'sizes',
  fill: 'colors',
  stroke: 'colors',
} as const

type CSSProperties = BaseCSSProperties<(string & {}) | number>

export type ResponsiveValue<
  Prop extends string,
  Theme extends BaseTheme = BaseTheme,
  Value = Prop extends keyof CSSProperties
    ? CSSProperties[Prop]
    : string | number | null | undefined
> = Value | Record<keyof Theme['breakpoints'], Value>

interface CoreOptions<Theme extends BaseTheme = BaseTheme, Scale = unknown> {
  input?: CSSInterpolation | null
  theme?: Theme
  getValue?<V>(value: V, scale: Scale | undefined): V
  getScale?(key: string, theme?: Theme): Scale
}

function rule(key: string, value: CSSInterpolation): CSSInterpolation {
  switch (key) {
    case 'size':
      if (isPropertyKey(value)) {
        return { width: value, height: value }
      }
    default:
      const [start, direction, end = ''] = (key.match(AXIS) || []).slice(1)
      switch (direction) {
        case 'X':
          return {
            [start + 'Left' + end]: value,
            [start + 'Right' + end]: value,
          }
        case 'Y':
          return {
            [start + 'Top' + end]: value,
            [start + 'Bottom' + end]: value,
          }
        default: {
          return { [key]: value }
        }
      }
  }
}

function core<Theme extends BaseTheme = BaseTheme>({
  input,
  theme,
  getValue = (value, scale) =>
    isPropertyKey(value) ? get(value, scale) ?? value : value,
  getScale = (key) => get(get(key, SCALES), theme),
}: CoreOptions<Theme>): CSSInterpolation[] {
  if (!isObject(input)) return []

  return Object.entries(input).flatMap(([key, value]) => {
    const result = isObject(value)
      ? core({ input: value, theme, getValue, getScale })
      : getValue(value, getScale(key, theme))

    if (theme?.breakpoints && key in theme.breakpoints) {
      const query = theme.breakpoints[key]
      return query ? { [`@media ${query}`]: result } : result
    }

    return rule(key, result)
  })
}

export interface PSS<Theme extends BaseTheme = BaseTheme> {
  pss?: CSSObject
  theme?: Theme
}

export const pss = <
  Theme extends BaseTheme = BaseTheme,
  Props extends PSS<Theme> = PSS<Theme>
>(
  props: Props
) =>
  core({
    input: props.pss,
    theme: props.theme,
  })

export interface Style<Prop extends string, Alias extends string = Prop> {
  prop: Prop
  alias?: Alias
  transform?: <V>(value: V) => V | string | number | null
}

const createStyle = <Prop extends string, Alias extends string = Prop>({
  prop,
  // @ts-expect-error
  alias = prop,
  transform = (input) => {
    switch (prop) {
      case 'width':
      case 'maxWidth':
      case 'minWidth':
      case 'height':
      case 'minHeight':
      case 'maxHeight':
        return typeof input === 'number' && input >= 0 && input <= 1
          ? `${input * 100}%`
          : input
      default:
        return input
    }
  },
}: Style<Prop, Alias>) => <
  Theme extends BaseTheme,
  Props extends { theme?: Theme } & StyleProps<Prop, Alias, Theme>
>(
  props: Props
): CSSInterpolation[] => {
  const propValue = props[alias]

  let input: CSSInterpolation
  if (isObject(propValue)) {
    input = Object.entries(propValue).reduce<Record<string, CSSInterpolation>>(
      (acc, [key, value]) => {
        if (isPrimitive(value)) {
          acc[key] = { [prop]: transform(value) }
        }
        return acc
      },
      {}
    )
  } else {
    input = { [prop]: transform(propValue) }
  }

  return core({
    input: input,
    theme: props.theme,
  })
}

export type StyleProps<
  Prop extends string,
  Alias extends string = Prop,
  Theme extends BaseTheme = BaseTheme
> = {
  [P in Alias]?: ResponsiveValue<Prop, Theme>
}

export const style = <Prop extends string, Alias extends string = Prop>(
  prop: Prop,
  alias?: Alias,
  transform?: <V>(value: V) => V | string | number | null
) => createStyle<Prop, Alias>({ prop, alias, transform })

type PropDirection<Base extends string> =
  | Base
  | `${Base}${'Left' | 'Right' | 'Top' | 'Bottom' | 'X' | 'Y'}`

type AliasDirection<Base extends string> =
  | Base
  | `${Base}${'l' | 'r' | 't' | 'b' | 'x' | 'y'}`

export type SpaceStyleProps<
  Prop extends 'margin' | 'padding',
  Alias extends string = Prop,
  Theme extends BaseTheme = BaseTheme
> = {
  [K in Alias extends Prop
    ? PropDirection<Prop>
    : AliasDirection<Alias>]?: ResponsiveValue<Prop, Theme>
}

export const spaceStyle = <
  Prop extends 'margin' | 'padding',
  Alias extends string = Prop
>(
  prop: Prop,
  alias?: Alias
) => [
  style(prop, alias),
  style(prop + 'Left', alias && alias + 'l'),
  style(prop + 'Right', alias && alias + 'r'),
  style(prop + 'Top', alias && alias + 't'),
  style(prop + 'Bottom', alias && alias + 'b'),
  style(prop + 'X', alias && alias + 'x'),
  style(prop + 'Y', alias && alias + 'y'),
]

export interface VariantProps<
  Key extends string,
  Theme extends BaseTheme = BaseTheme
> {
  variant?: (Key extends keyof Theme ? keyof Theme[Key] : string) | 'default'
}

export const variant = <Key extends string>(key: Key) => <
  Theme extends BaseTheme,
  Props extends { theme?: Theme }
>({
  theme,
  variant = 'default',
}: Props & VariantProps<Key, Theme>) =>
  core({
    // @ts-expect-error
    input: get(`${key}.${variant}`, theme),
    theme,
  })
