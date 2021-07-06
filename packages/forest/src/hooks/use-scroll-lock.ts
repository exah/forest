import { useDocument } from './use-document'
import { useUniversalLayoutEffect } from './use-universal-layout-effect'
import { getScrollingElement, scrollLock } from '../utils'

export function useScrollLock(condition: boolean = true) {
  const doc = useDocument()

  useUniversalLayoutEffect(() => {
    const scrollingElement = getScrollingElement(doc)

    if (condition && scrollingElement != null) {
      const unlock = scrollLock(scrollingElement)
      return () => unlock()
    }
  }, [doc, condition])
}
