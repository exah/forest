import PinyTheme from 'piny-theme/src'
import { Text, Provider } from 'piny-forest/src'
import { MDX } from '../.internal'

const ctx = require.context('piny-forest/src', true, /\.mdx$/)
const docs = ctx.keys().map((key) => [key, ctx(key).default])

function Index() {
  return (
    <Provider theme={PinyTheme}>
      <MDX>
        <Text as="h1" variant="logo" mx={{ $md: 100 }} mb={6}>
          Piny / Forest
        </Text>
        {docs.map(([key, Comp]) => (
          <Comp key={key} />
        ))}
      </MDX>
    </Provider>
  )
}

export default Index
