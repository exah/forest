import { MDX } from '../.internal'

const ctx = require.context('piny-forest/src', true, /\.mdx$/)
const docs = ctx.keys().map((key) => [key, ctx(key).default])

function Index() {
  return (
    <MDX>
      {docs.map(([key, Comp]) => (
        <Comp key={key} />
      ))}
    </MDX>
  )
}

export default Index
