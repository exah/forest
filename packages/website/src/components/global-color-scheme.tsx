import { useState, useLayoutEffect, useEffect } from 'react'
import { Select, Theme, Root } from 'piny-forest/src'

const useUniversalLayoutEffect =
  typeof window === 'undefined' ? useEffect : useLayoutEffect

type Mode = keyof Theme['colorSchemes']

function useLocalModeState(key: string = '@@piny-forest/mode') {
  const [current, setMode] = useState<Mode>('auto')

  useUniversalLayoutEffect(() => {
    const restored = window.localStorage.getItem(key) as Mode
    if (restored) setMode(restored)
  }, [])

  useUniversalLayoutEffect(() => {
    if (current) window.localStorage.setItem(key, current)
  }, [current])

  return [current, setMode] as const
}

export function GlobalColorScheme() {
  const [mode, setMode] = useLocalModeState()
  return (
    <>
      <Root colorScheme={mode} />
      <Select
        value={mode}
        onChange={(event) => setMode(event.currentTarget.value as Mode)}
      >
        <option value="auto">Mode: Auto</option>
        <option value="light">Mode: Light</option>
        <option value="dark">Mode: Dark</option>
      </Select>
    </>
  )
}
