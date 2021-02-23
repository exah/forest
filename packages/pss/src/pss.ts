import { CSSObject, CSSInterpolation } from '@emotion/serialize'

import SCALES from './scales'
import {
  Responsive,
  StyleValue,
  VariantValue,
  SystemTheme,
  BreakpointsSystemTheme,
  ColorSchemesSystemTheme,
  ColorSchemesValue,
} from './types'
import {
  get,
  isObject,
  isPrimitive,
  isPropertyKey,
  isString,
  toArray,
} from './helpers'

const AXIS = /^(\w+)(X|Y)(\w+)?$/

function responsive<I>(
  input: I | Record<string, I> | undefined,
  transform: (input: I | undefined) => CSSInterpolation
): CSSInterpolation {
  if (isObject(input)) {
    return Object.entries(input).reduce<Record<string, CSSInterpolation>>(
      (acc, [key, value]) => {
        acc[key] = transform(value)
        return acc
      },
      {}
    )
  }

  return transform(input)
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

function defaultGetValue<V>(value: V, scale?: unknown): V {
  return isPropertyKey(value) ? get(value, scale) ?? value : value
}

function defaultGetScale(key: string, theme?: SystemTheme): unknown {
  return get(get(key, SCALES), theme)
}

function hasBreakpoints<T extends { breakpoints?: unknown }>(
  theme?: T
): theme is T & BreakpointsSystemTheme {
  return isObject(theme?.breakpoints)
}

function defaultTransform<V, Prop extends string>(
  value: V,
  prop: Prop
): V | string | number | null {
  switch (prop) {
    case 'width':
    case 'maxWidth':
    case 'minWidth':
    case 'height':
    case 'minHeight':
    case 'maxHeight':
      return typeof value === 'number' && value >= 0 && value <= 1
        ? `${value * 100}%`
        : value
    case 'gridTemplateColumns':
    case 'gridTemplateRows':
      return typeof value === 'number' ? `repeat(${value}, 1fr)` : value
    default:
      return value
  }
}

interface CoreOptions {
  input?: CSSInterpolation | null
  theme?: SystemTheme
  getValue?<V>(value: V, scale?: unknown): V
  getScale?(key: string, theme?: SystemTheme): unknown
}

function core({
  input,
  theme,
  getValue = defaultGetValue,
  getScale = defaultGetScale,
}: CoreOptions): CSSInterpolation[] {
  if (!isObject(input)) return []

  return Object.entries(input).flatMap(([key, value]) => {
    if (key === 'variant')
      return core({ input: get(value, theme), theme, getValue, getScale })

    const style = isObject(value)
      ? core({ input: value, theme, getValue, getScale })
      : getValue(value, getScale(key, theme))

    if (hasBreakpoints(theme) && key in theme.breakpoints) {
      const query = theme.breakpoints[key]
      return query ? { [`@media ${query}`]: style } : style
    }

    return rule(key, style)
  })
}

export interface PSS {
  pss?: CSSObject
  theme?: SystemTheme
}

export const pss = <Props extends PSS>(props: Props) =>
  core({
    input: props.pss,
    theme: props.theme,
  })

interface CreateStyleOptions<Prop extends string, Alias extends string = Prop> {
  prop: Prop
  alias?: Alias
  transform?: <V>(value: V, prop: Prop) => V | string | number | null
}

export type StyleProps<Prop extends string, Alias extends string = Prop> = {
  theme?: SystemTheme
} & {
  [P in Alias]?: Responsive<StyleValue<Prop>>
}

const createStyle = <Prop extends string, Alias extends string = Prop>({
  prop,
  // @ts-expect-error
  alias = prop,
  transform = defaultTransform,
}: CreateStyleOptions<Prop, Alias>) => <Props extends StyleProps<Prop, Alias>>(
  props: Props
): CSSInterpolation[] =>
  core({
    input: responsive(props[alias], (result) => {
      if (isPrimitive(result)) {
        return {
          [prop]: transform(result, prop),
        }
      }

      return null
    }),
    theme: props.theme,
  })

export const style = <Prop extends string, Alias extends string = Prop>(
  prop: Prop,
  alias?: Alias
) => createStyle<Prop, Alias>({ prop, alias })

export interface VariantProps<Key extends string> {
  theme?: SystemTheme
  variant?: Responsive<VariantValue<Key>> | Responsive<VariantValue<Key>>[]
}

export const variant = <Key extends string>(key: Key, base?: string) => <
  Props extends VariantProps<Key>
>(
  props: Props
) =>
  [...toArray(base), ...toArray(props.variant)].map((variant) =>
    core({
      input: responsive(variant, (result) =>
        get(`${key}.${result}`, props.theme)
      ),
      theme: props.theme,
    })
  )

type PropDirection<Base extends string> =
  | Base
  | `${Base}${'Left' | 'Right' | 'Top' | 'Bottom' | 'X' | 'Y'}`

type AliasDirection<Base extends string> =
  | Base
  | `${Base}${'l' | 'r' | 't' | 'b' | 'x' | 'y'}`

export type SpaceStyleProps<
  Prop extends 'margin' | 'padding',
  Alias extends string = Prop
> = {
  [K in Alias extends Prop
    ? PropDirection<Prop>
    : AliasDirection<Alias>]?: Responsive<StyleValue<Prop>>
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

function hasColorSchemes<T extends { colorSchemes?: unknown }>(
  theme?: T
): theme is T & ColorSchemesSystemTheme {
  return isObject(theme?.colorSchemes)
}

export interface ColorSchemeProps {
  theme?: SystemTheme
  colorScheme?: ColorSchemesValue | 'auto'
}

export function colorScheme({ theme, colorScheme: mode }: ColorSchemeProps) {
  if (hasColorSchemes(theme) && isString(mode)) {
    return core({
      input: theme.colorSchemes[mode],
      theme: theme,
    })
  }

  return null
}
