import React from 'react'

import Highlight, { Language, Prism } from 'prism-react-renderer'
import GithubTheme from 'prism-react-renderer/themes/github'
import { Box, Text } from 'piny-forest/src'

interface Props {
  language: Language
  code: string
}

export const CodeHighlight = (props: Props) => (
  <Box mb="s.20" pr="s.16">
    <Highlight Prism={Prism} theme={GithubTheme} {...props}>
      {({ tokens, getLineProps, getTokenProps, style }) => (
        <Box
          variant="code"
          w={0.5}
          p="s.8"
          style={{ ...style, backgroundColor: undefined }}
        >
          {tokens.map((line, index) => (
            <Text
              as="div"
              fontFamily="monospace"
              {...getLineProps({ line, key: index })}
            >
              {line.map((token, key) => (
                <Text {...getTokenProps({ token, key })} />
              ))}
            </Text>
          ))}
        </Box>
      )}
    </Highlight>
  </Box>
)
