import { Text, Provider, Theme } from 'piny-forest/src'
import { MDX } from '../.internal'

const ctx = require.context('piny-forest', true, /\.mdx$/)
const doc = ctx.keys().map((key) => [key, ctx(key).default])

function Index() {
  return (
    <Provider theme={Theme}>
      <MDX>
        <Text as="h1" variant="logo" mb={6}>
          Piny / Forest
        </Text>
        {doc.map(([key, Comp]) => (
          <Comp key={key} />
        ))}
      </MDX>
    </Provider>
  )
}

export default Index
