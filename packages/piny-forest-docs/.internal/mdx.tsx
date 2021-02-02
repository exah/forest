import React from 'react'

import { MDXProvider } from '@mdx-js/react'
import { Language } from 'prism-react-renderer'
import { Text, List, ListItem } from 'piny-forest/src'
import { CodePlayground } from './code-playground'
import { CodeHighlight } from './code-highlight'

interface Props {
  className: string
  children?: React.ReactNode
  live?: boolean
}

function Code({ live, children, className, ...rest }: Props) {
  const code = React.Children.toArray(children).join('\n').trim()
  const language = className.replace('language-', '') as Language

  return live ? (
    <CodePlayground code={code} {...rest} />
  ) : (
    <CodeHighlight code={code} language={language} />
  )
}

function InlineCode(props: Props) {
  return (
    <Text
      as="code"
      variant="secondary"
      fontFamily="monospace"
      bg="#eee"
      px={1}
      {...props}
    />
  )
}

const H1 = (props: Props) => (
  <Text as="h2" variant="heading" w={0.5} mb={5} {...props} />
)

const H2 = (props: Props) => (
  <Text as="h3" variant="primary" fontWeight="semi" w={0.5} mb={4} {...props} />
)

const P = (props: Props) => (
  <Text as="p" variant="primary" w={0.5} mb={3} {...props} />
)

const UL = (props: Props) => <List as="ul" w={0.5} mb={4} {...props} />
const LI = (props: Props) => <ListItem as="li" mb={1} {...props} />

const components = {
  h1: H1,
  h2: H2,
  p: P,
  ul: UL,
  li: LI,
  pre: (props: Props) => props.children as JSX.Element,
  code: Code,
  inlineCode: InlineCode,
}

export function MDX(props: { children: React.ReactNode }) {
  return <MDXProvider components={components} {...props} />
}
