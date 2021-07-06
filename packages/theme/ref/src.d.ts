import PinyTheme from '../src'

declare module '@emotion/react' {
  export interface Theme extends PinyTheme {}
}

declare module 'pss' {
  export interface SystemTheme extends PinyTheme {}
}
