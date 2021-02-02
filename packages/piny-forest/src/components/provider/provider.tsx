import { ThemeProvider } from '@emotion/react'

interface ProviderProps<T> {
  theme: T
  children?: React.ReactNode
}

export function Provider<T>(props: ProviderProps<T>) {
  return <ThemeProvider {...props} />
}
