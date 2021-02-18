import Highlight, { Language, Prism } from 'prism-react-renderer'
import GithubTheme from 'prism-react-renderer/themes/github'
import { Box, Text } from 'piny-forest/src'

interface Props {
  language: Language
  code: string
}

export const CodeHighlight = (props: Props) => (
  <Box my="s.24" w={{ $md: 0.5 }} pr={{ $md: 's.16' }}>
    <Highlight Prism={Prism} theme={GithubTheme} {...props}>
      {({ tokens, getLineProps, getTokenProps, style }) => (
        <Box
          as="pre"
          p="s.8"
          variant="code"
          style={{ ...style, backgroundColor: undefined }}
        >
          {tokens.map((line, index) => (
            <Text
              as="div"
              fontFamily="monospace"
              pss={{
                overflowWrap: 'break-word',
                whiteSpace: 'pre-wrap',
                wordBreak: 'keep-all',
              }}
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
