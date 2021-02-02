import { LiveProvider, LivePreview, LiveEditor, LiveError } from 'react-live'
import { mdx, useMDXComponents } from '@mdx-js/react'
import GithubTheme from 'prism-react-renderer/themes/github'
import * as lib from 'piny-forest/src'
import { Box, HStack } from 'piny-forest/src'

interface PlaygroundProps {
  code: string
}

export function CodePlayground(props: PlaygroundProps) {
  const components = useMDXComponents()

  return (
    <LiveProvider
      scope={{ mdx, ...components, ...lib }}
      transformCode={(input) => `<>${input}</>`}
      {...props}
    >
      <HStack gap={4} my={8}>
        <Box w={0.5} pss={{ borderRadius: '0.25rem', overflow: 'hidden' }}>
          <LiveEditor theme={GithubTheme} />
        </Box>
        <Box w={0.5}>
          <LivePreview />
        </Box>
      </HStack>
      <LiveError />
    </LiveProvider>
  )
}
