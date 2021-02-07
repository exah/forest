import * as React from 'react'
import * as PinyForest from 'piny-forest/src'
import GithubTheme from 'prism-react-renderer/themes/github'
import { LiveProvider, LivePreview, LiveEditor, LiveError } from 'react-live'
import { useState } from 'react'
import { Box, Label, HStack } from 'piny-forest/src'

interface PlaygroundProps {
  code: string
}

export const SCOPE = { ...React, ...PinyForest }

export function CodePlayground({
  code: defaultCode,
  ...rest
}: PlaygroundProps) {
  const [code, setCode] = useState<string>(defaultCode)
  const [hasOutline, setOutline] = useState<boolean>(false)
  return (
    <LiveProvider
      scope={SCOPE}
      transformCode={(input) =>
        /^(function|class)/.test(input) ? input : `<>${input}</>`
      }
      code={code}
      {...rest}
    >
      <HStack gap={4} mb={5}>
        <Box w={0.5} variant={{ '> div': 'code' }}>
          <LiveEditor
            theme={GithubTheme}
            style={{ backgroundColor: null }}
            code={code}
            onChange={setCode}
          />
        </Box>
        <Box
          w={0.5}
          pss={{
            '> div': { outline: hasOutline ? '1px solid red' : 'none' },
          }}
        >
          <LivePreview />
          <Label mt={2}>
            <input
              type="checkbox"
              checked={hasOutline}
              onChange={(event) => setOutline(event.target.checked)}
            />
            {' Outline'}
          </Label>
        </Box>
      </HStack>
      <LiveError />
    </LiveProvider>
  )
}
