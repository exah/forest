import { Properties as BaseCSSProperties } from 'csstype'
import { CSSObject, CSSInterpolation } from '@emotion/serialize'

import { SCALES } from '../constants/scales'
import { Theme as BaseTheme } from '../types'
import { get, isObject, isPrimitive, isPropertyKey } from './helpers'

const AXIS = /^(\w+)(X|Y)(\w+)?$/
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
