import * as React from 'react'
import * as PinyForest from 'piny-forest/src'
import GithubTheme from 'prism-react-renderer/themes/github'
import { LiveProvider, LivePreview, LiveEditor, LiveError } from 'react-live'
import { Box, HStack } from 'piny-forest/src'

interface PlaygroundProps {
  code: string
}

export const SCOPE = { ...React, ...PinyForest }

export const CodePlayground = (props: PlaygroundProps) => (
  <LiveProvider
    scope={SCOPE}
    transformCode={(input) =>
      /^(function|class)/.test(input) ? input : `<>${input}</>`
    }
    {...props}
  >
    <HStack gap={4} mb={5}>
      <Box w={0.5} variant={{ '> div': 'code' }}>
        <LiveEditor theme={GithubTheme} style={{ backgroundColor: null }} />
      </Box>
      <Box w={0.5} variant={{ '> div': 'code' }}>
        <LivePreview />
      </Box>
    </HStack>
    <LiveError />
  </LiveProvider>
)
