import '@emotion/react'
import { SystemTheme } from 'piny-forest/src'

declare module '@emotion/react' {
  export interface Theme extends SystemTheme {}
}
