import React from 'react'

import { MDXProvider } from '@mdx-js/react'
import { Box, Text } from 'piny-forest/src'
import { Playground } from './playground'

interface Props {
  className?: string
  live?: boolean
  children?: React.ReactNode
}

function Code({ live, children, ...rest }: Props) {
  if (!live) {
    return (
      <Box as="pre" bg="black" color="white">
        <Box as="code">{children}</Box>
      </Box>
    )
  }

  return (
    <Playground code={React.Children.toArray(children).join('\n')} {...rest} />
  )
}

const components = {
  h1: (props: Props) => <Text as="h1" mb="s-16" {...props} />,
  h2: (props: Props) => <Text as="h2" {...props} />,
  h3: (props: Props) => <Text as="h3" {...props} />,
  h4: (props: Props) => <Text as="h4" {...props} />,
  h5: (props: Props) => <Text as="h5" {...props} />,
  h6: (props: Props) => <Text as="h6" {...props} />,
  p: (props: Props) => <Text as="p" {...props} />,
  pre: (props: Props) => props.children as JSX.Element,
  code: Code,
}

export function MDX({ children }: Props) {
  return <MDXProvider components={components}>{children}</MDXProvider>
}
