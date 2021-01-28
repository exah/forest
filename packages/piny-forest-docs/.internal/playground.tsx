import { LiveProvider, LivePreview, LiveEditor, LiveError } from 'react-live'
import { mdx, useMDXComponents } from '@mdx-js/react'
import * as lib from 'piny-forest/src'
import { Box } from 'piny-forest/src'

interface PlaygroundProps {
  code: string
}

export function Playground(props: PlaygroundProps) {
  const components = useMDXComponents()

  return (
    <LiveProvider
      scope={{ mdx, ...components, ...lib }}
      transformCode={(input) => `<>${input}</>`}
      {...props}
    >
      <LivePreview />
      <Box
        pss={{
          backgroundColor: 'black',
          caretColor: 'white',
          borderRadius: '0.25rem',
          marginY: '1rem',
        }}
      >
        <LiveEditor />
      </Box>
      <LiveError />
    </LiveProvider>
  )
}
