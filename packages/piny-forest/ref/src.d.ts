import * as PinyForest from 'piny-forest/src'

declare module '@emotion/react' {
  export interface Theme extends PinyForest.Theme {}
}

declare module 'pss' {
  export interface SystemTheme extends PinyForest.Theme {}
}
