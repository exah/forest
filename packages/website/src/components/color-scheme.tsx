import {
  createContext,
  useContext,
  useState,
  useLayoutEffect,
  useEffect,
} from 'react'
import { Select, Root, RootProps, Label } from 'piny-forest/src'
import Theme from 'piny-theme/src'

const useUniversalLayoutEffect =
  typeof window === 'undefined' ? useEffect : useLayoutEffect

function useLocalState<S extends string>(key: string, initial: S) {
  const state = useState<S>(initial)
  const [value, setValue] = state

  useUniversalLayoutEffect(() => {
    const restored = window.localStorage.getItem(key) as S
    if (restored) setValue(restored)
  }, [])

  useUniversalLayoutEffect(() => {
    if (value) window.localStorage.setItem(key, value)
  }, [value])

  return state
}

type Mode = keyof Theme['colorSchemes']

const ColorSchemeContext = createContext<[Mode, (mode: Mode) => void]>([
  'auto',
  () => {},
])

export function ColorSchemeProvider(props: { children: React.ReactNode }) {
  const value = useLocalState<Mode>('@@piny-forest/mode', 'auto')
  return (
    <ColorSchemeContext.Provider value={value}>
      {props.children}
    </ColorSchemeContext.Provider>
  )
}

export function ColorSchemeRoot(props: RootProps) {
  const [mode] = useContext(ColorSchemeContext)
  return <Root {...props} colorScheme={mode} />
}

export function ColorSchemeSelect() {
  const [mode, setMode] = useContext(ColorSchemeContext)
  return (
    <Label>
      Mode:&nbsp;
      <Select
        value={mode}
        onChange={(event) => setMode(event.currentTarget.value as Mode)}
      >
        <option value="auto">Auto</option>
        <option value="light">Light</option>
        <option value="dark">Dark</option>
      </Select>
    </Label>
  )
}
