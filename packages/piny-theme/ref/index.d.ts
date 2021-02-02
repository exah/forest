import '@emotion/react'
import 'piny-forest'

import PinyTheme from 'piny-theme'

declare module '@emotion/react' {
  export interface Theme extends PinyTheme {}
}

declare module 'piny-forest' {
  export interface SystemTheme extends PinyTheme {}
}
