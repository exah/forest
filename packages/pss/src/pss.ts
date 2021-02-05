import { CSSObject, CSSInterpolation } from '@emotion/serialize'

import SCALES from './scales'
import {
  Responsive,
  StyleValue,
  VariantValue,
  SystemTheme,
  BreakpointsSystemTheme,
} from './types'
import { get, isObject, isPrimitive, isPropertyKey } from './helpers'

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

function hasBreakpoints<T>(theme?: T): theme is T & BreakpointsSystemTheme {
  // @ts-expect-error
  return isObject(theme?.breakpoints)
}

interface CoreOptions<Scale = unknown> {
  input?: CSSInterpolation | null
  theme?: SystemTheme
  getValue?<V>(value: V, scale?: Scale): V
  getScale?(key: string, theme?: SystemTheme): Scale
}

function core({
  input,
  theme,
  getValue = (value, scale) =>
    isPropertyKey(value) ? get(value, scale) ?? value : value,
  getScale = (key) => get(get(key, SCALES), theme),
}: CoreOptions): CSSInterpolation[] {
  if (!isObject(input)) return []

  return Object.entries(input).flatMap(([key, value]) => {
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
  transform?: <V>(value: V) => V | string | number | null
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
      case 'gridTemplateColumns':
      case 'gridTemplateRows':
        return typeof input === 'number' ? `repeat(${input}, 1fr)` : input
      default:
        return input
    }
  },
}: CreateStyleOptions<Prop, Alias>) => <Props extends StyleProps<Prop, Alias>>(
  props: Props
): CSSInterpolation[] =>
  core({
    input: responsive(props[alias], (result) => {
      if (isPrimitive(result)) {
        return {
          [prop]: transform(result),
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

export interface VariantProps<Key extends string> {
  theme?: SystemTheme
  variant?: Responsive<VariantValue<Key>>
}

export const variant = <Key extends string>(key: Key) => <
  Props extends VariantProps<Key>
>({
  theme,
  variant = 'default',
}: Props) =>
  core({
    input: responsive(variant, (result) => get(`${key}.${result}`, theme)),
    theme,
  })
