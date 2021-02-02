import '@emotion/react'
import { SystemTheme } from 'piny-forest'

declare module '@emotion/react' {
  export interface Theme extends SystemTheme {}
}
