import ReactDOM from 'react-dom'
import { useRef, useState, useEffect } from 'react'
import createCache, { EmotionCache } from '@emotion/cache'
import weakMemoize from '@emotion/weak-memoize'
import { CacheProvider } from '@emotion/react'
import { Box, BoxProps } from 'piny-forest/src'
import { ColorSchemeRoot } from './color-scheme'

const cache = weakMemoize<HTMLHeadElement, EmotionCache>((container) =>
  createCache({
    key: 'frame',
    container,
  })
)

export function Frame({ children, ...rest }: BoxProps<'iframe'>) {
  const ref = useRef<HTMLIFrameElement | null>(null)
  const [doc, setDoc] = useState<HTMLDocument | null>(null)

  useEffect(() => {
    const element = ref.current
    if (element) {
      function handleLoad() {
        if (element?.contentDocument?.readyState === 'complete') {
          setDoc(element.contentDocument)
        }
      }

      handleLoad()
      element.addEventListener('load', handleLoad)
      return () => element.removeEventListener('load', handleLoad)
    }
  }, [ref])

  return (
    <Box ref={ref} as="iframe" srcDoc="<!DOCTYPE html>" {...rest}>
      {doc &&
        ReactDOM.createPortal(
          <CacheProvider value={cache(doc.head)}>
            <ColorSchemeRoot pss={{ body: { margin: 0 } }} />
            {children}
          </CacheProvider>,
          doc.body
        )}
    </Box>
  )
}
