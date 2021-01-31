import { ThemeProvider } from '@emotion/react'
import { THEME } from '../../constants/theme'

interface ProviderProps {
  children?: React.ReactNode
}

export const Provider = (props: ProviderProps) => (
  <ThemeProvider theme={THEME} {...props} />
)
