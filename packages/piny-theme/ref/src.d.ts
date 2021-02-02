import '@emotion/react'
import 'piny-forest/src'

import PinyTheme from 'piny-theme/src'

declare module '@emotion/react' {
  export interface Theme extends PinyTheme {}
}

declare module 'piny-forest/src' {
  export interface SystemTheme extends PinyTheme {}
}
