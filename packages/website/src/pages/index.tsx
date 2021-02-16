import Head from 'next/head'
import {
  Text,
  Box,
  Provider,
  Theme,
  Layout,
  LayoutMain,
  LayoutNav,
  List,
  ListItem,
  Link,
} from 'piny-forest/src'
import { rem } from 'pss'
import { MDX, Logo } from '../components'

const context = require.context('piny-forest', true, /\.mdx$/)
const modules = context.keys().map((key) => [key, context(key)])

const components = modules.filter(([key]) => key.includes('/components/'))
const primitives = modules.filter(([key]) => key.includes('/primitives/'))

function Index() {
  return (
    <Provider theme={Theme}>
      <Head>
        <title>Forest</title>
        <meta
          name="description"
          content="Component library and design system for piny.link"
        />
      </Head>
      <Text as="div" variant="primary" fg="foreground">
        <Layout>
          <LayoutNav>
            <List>
              <ListItem>
                <Link href="#top">
                  <Box mb="s.20">
                    <Logo role="img" aria-label="Forest" />
                  </Box>
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
          </LayoutNav>
          <LayoutMain>
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
          </LayoutMain>
        </Layout>
      </Text>
      <style jsx global>{`
        html {
          scroll-padding-top: ${rem(32)};
        }

        body {
          margin: 0;
          padding: 0;
        }
      `}</style>
    </Provider>
  )
}

export default Index
