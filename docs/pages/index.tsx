import { Text, Box, Provider, Theme } from 'piny-forest/src'
import { MDX } from '../.internal'

const context = require.context('piny-forest', true, /\.mdx$/)
const modules = context.keys().map((key) => [key, context(key).default])
const components = modules.filter(([key]) => key.includes('/components/'))
const primitives = modules.filter(([key]) => key.includes('/primitives/'))

function Index() {
  return (
    <Provider theme={Theme}>
      <MDX>
        <Box as="main" fg="foreground" px="s.12">
          <Text as="h1" variant="h1" mb="s.20">
            Forest
          </Text>
          <Box as="section">
            <Text as="h2" variant="h2" mb="s.20">
              Components
            </Text>
            {components.map(([key, Comp]) => (
              <Comp key={key} />
            ))}
          </Box>
          <Box as="section" mt="s.32">
            <Text as="h2" variant="h2" mb="s.20">
              Primitives
            </Text>
            {primitives.map(([key, Comp]) => (
              <Comp key={key} />
            ))}
          </Box>
        </Box>
      </MDX>
    </Provider>
  )
}

export default Index
