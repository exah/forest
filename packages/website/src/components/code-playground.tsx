import * as React from 'react'
import * as PinyForest from 'piny-forest/src'
import GithubTheme from 'prism-react-renderer/themes/github'
import { LiveProvider, LivePreview, LiveEditor, LiveError } from 'react-live'
import { useState, useEffect } from 'react'
import { Box, Grid, Label } from 'piny-forest/src'
import { Frame } from './frame'

interface PlaygroundProps {
  code: string
  isolate?: boolean
}

export const SCOPE = { ...React, ...PinyForest }

export function CodePlayground({
  code: defaultCode,
  isolate = false,
  ...rest
}: PlaygroundProps) {
  const [code, setCode] = useState<string>(defaultCode)
  const Wrapper = isolate ? Frame : Box

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
          <Label aria-label="Live editor">
            <LiveEditor theme={GithubTheme} code={code} onChange={setCode} />
          </Label>
        </Box>
        <Box
          pss={{
            position: 'relative',
            order: -1,
            $md: { order: 1 },
          }}
        >
          <Wrapper title="Live preview" pss={{ size: '100%' }}>
            <LivePreview />
          </Wrapper>
        </Box>
      </Grid>
      <LiveError />
    </LiveProvider>
  )
}
