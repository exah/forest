import * as React from 'react'
import * as PinyForest from 'piny-forest/src'
import GithubTheme from 'prism-react-renderer/themes/github'
import { LiveProvider, LivePreview, LiveEditor, LiveError } from 'react-live'
import { useState, useEffect } from 'react'
import { Box, Grid, Label, HStack } from 'piny-forest/src'

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

  useEffect(() => setCode(defaultCode), [defaultCode])

  return (
    <LiveProvider
      scope={SCOPE}
      transformCode={(input) =>
        /^(function|class)/.test(input) ? input : `<>${input}</>`
      }
      code={code}
      {...rest}
    >
      <Grid columns={{ $: 1, $md: 2 }} gap="s.16" my="s.24">
        <Box variant={{ '> div': 'code' }}>
          <LiveEditor
            theme={GithubTheme}
            style={{ backgroundColor: undefined }}
            code={code}
            onChange={setCode}
          />
        </Box>
        <Box
          pss={{
            position: 'relative',
            '> div': { outline: hasOutline ? '1px solid red' : 'none' },
            order: -1,
            $md: { order: 1 },
          }}
        >
          <LivePreview />
          <Label mt="s.8">
            <input
              type="checkbox"
              checked={hasOutline}
              onChange={(event) => setOutline(event.target.checked)}
            />
            {' Outline'}
          </Label>
        </Box>
      </Grid>
      <LiveError />
    </LiveProvider>
  )
}
