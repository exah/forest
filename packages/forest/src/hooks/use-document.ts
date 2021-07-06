import { useContext } from 'react'
import { DocumentContext } from '../contexts'

export const useDocument = () => useContext(DocumentContext)
