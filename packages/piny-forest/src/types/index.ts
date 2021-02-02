import * as CSS from 'csstype'
import { SCALES } from '../constants/scales'

export interface SystemTheme {}

export interface BreakpointsSystemTheme extends SystemTheme {
  breakpoints: { [K: string]: string | null }
}

export type Properties = CSS.Properties<(string & {}) | number>

export type ThemeValue<Key extends string> = Key extends keyof SystemTheme
  ? keyof SystemTheme[Key]
  : never

export type StyleValue<Prop extends string> =
  | (Prop extends keyof Properties ? Properties[Prop] : never)
  | ThemeValue<Prop extends keyof SCALES ? SCALES[Prop] : never>

export type VariantValue<Key extends string> =
  | (Key extends keyof SystemTheme ? keyof SystemTheme[Key] : never)
  | 'default'

export type BreakpointsRecord<
  Value,
  Key extends keyof SystemTheme = keyof SystemTheme
> = Key extends 'breakpoints'
  ? { [K in keyof SystemTheme[Key]]?: Value }
  : never

export type Responsive<Value> =
  | Value
  | Record<string, Value>
  | BreakpointsRecord<Value>
