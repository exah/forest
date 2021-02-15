import {
  Text,
  Grid,
  Box,
  Provider,
  Theme,
  List,
  ListItem,
  Link,
} from 'piny-forest/src'
import { rem } from 'pss'
import { MDX } from '../components'

const context = require.context('piny-forest', true, /\.mdx$/)
const modules = context.keys().map((key) => [key, context(key)])

const components = modules.filter(([key]) => key.includes('/components/'))
const primitives = modules.filter(([key]) => key.includes('/primitives/'))

function Index() {
  return (
    <Provider theme={Theme}>
      <Text as="div" variant="primary" px="s.16">
        <Grid columns={{ $: 1, $md: '10rem 1fr' }} gap="s.16">
          <Box as="nav">
            <List pss={{ position: 'sticky', top: 's.16' }}>
              <ListItem>
                <Link href="#top">
                  <Text as="h1" variant="h1" mb="s.20">
                    Forest
                  </Text>
                </Link>
              </ListItem>
              <ListItem>
                <Link href="#components" variant="article">
                  Components
                </Link>
                <List ml="s.12" mb="s.12">
                  {components.map(([key, mod]) => (
                    <ListItem key={key}>
                      <Link href={`#${mod.id}`} variant="article">
                        <Text variant="secondary">{mod.title}</Text>
                      </Link>
                    </ListItem>
                  ))}
                </List>
              </ListItem>
              <ListItem>
                <Link href="#primitives" variant="article">
                  Primitives
                </Link>
                <List ml="s.12">
                  {primitives.map(([key, mod]) => (
                    <ListItem key={key}>
                      <Link href={`#${mod.id}`} variant="article">
                        <Text variant="secondary">{mod.title}</Text>
                      </Link>
                    </ListItem>
                  ))}
                </List>
              </ListItem>
            </List>
          </Box>
          <Box as="main" fg="foreground" pt="s.20">
            <MDX>
              <Box id="components" as="section" mb="s.40">
                <Text as="h2" variant="h2" pt="s.2" mb="s.20">
                  Components
                </Text>
                {components.map(([key, mod]) => (
                  <mod.default key={key} />
                ))}
              </Box>
              <Box id="primitives" as="section">
                <Text as="h2" variant="h2" pt="s.2" mb="s.20">
                  Primitives
                </Text>
                {primitives.map(([key, mod]) => (
                  <mod.default key={key} />
                ))}
              </Box>
            </MDX>
          </Box>
        </Grid>
        <style jsx global>{`
          html {
            scroll-padding-top: ${rem(20)};
          }

          body {
            margin: 0;
            padding: 0;
          }
        `}</style>
      </Text>
    </Provider>
  )
}

export default Index
