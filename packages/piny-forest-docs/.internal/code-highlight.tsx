import React from 'react'

import Highlight, { Language, Prism } from 'prism-react-renderer'
import GithubTheme from 'prism-react-renderer/themes/github'
import { Box, Text } from 'piny-forest/src'

interface Props {
  language: Language
  code: string
}

export const CodeHighlight = (props: Props) => (
  <Highlight Prism={Prism} theme={GithubTheme} {...props}>
    {({ tokens, getLineProps, getTokenProps, style }) => (
      <Box w={0.5} p={2} my={5} style={{ ...style, borderRadius: '0.25rem' }}>
        {tokens.map((line, index) => (
          <Text
            as="div"
            variant="primary"
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
)
