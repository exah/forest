import { createContext } from 'react'

export const DocumentContext = createContext<HTMLDocument | null>(
  typeof document === 'undefined' ? null : document
)
