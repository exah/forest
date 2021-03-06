import Head from 'next/head'
import {
  Box,
  Group,
  Header,
  HeaderTitle,
  Layout,
  LayoutMain,
  LayoutNav,
  Link,
  List,
  ListItem,
  Provider,
  Text,
  Theme,
} from 'piny-forest/src'
import {
  MDX,
  SiteLogo,
  ColorSchemeProvider,
  ColorSchemeRoot,
  ColorSchemeSelect,
} from '../components'

const context = require.context('piny-forest', true, /\.mdx$/)
const modules = context.keys().map((key) => [key, context(key)])

const components = modules.filter(([key]) => key.includes('/components/'))
const primitives = modules.filter(([key]) => key.includes('/primitives/'))

const getId = (input: string) => `s-${input.replace(/^(.+)\/(.+)\.mdx$/, '$2')}`

function Index() {
  return (
    <ColorSchemeProvider>
      <Provider theme={Theme}>
        <Head>
          <title>Forest</title>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <meta
            name="description"
            content="Component library and design system for piny.link"
          />
        </Head>
        <ColorSchemeRoot
          pss={{
            body: { margin: 0 },
            $md: { scrollPaddingTop: 's.32' },
          }}
        />
        <Layout>
          <LayoutNav>
            <Group>
              <Link href="#top">
                <Box mb="s.20">
                  <SiteLogo role="img" aria-label="Forest" />
                </Box>
              </Link>
            </Group>
            <Group>
              <ColorSchemeSelect />
            </Group>
            <Group>
              <Header>
                <HeaderTitle>
                  <Link href="#primitives">Components</Link>
                </HeaderTitle>
              </Header>
              <List>
                {components.map(([key, mod]) => (
                  <ListItem key={key}>
                    <Link href={`#${getId(key)}`} h="s.32" variant="article">
                      <Text variant="secondary">{mod.title}</Text>
                    </Link>
                  </ListItem>
                ))}
              </List>
            </Group>
            <Group>
              <Header>
                <HeaderTitle>
                  <Link href="#primitives">Primitives</Link>
                </HeaderTitle>
              </Header>
              <List>
                {primitives.map(([key, mod]) => (
                  <ListItem key={key}>
                    <Link href={`#${getId(key)}`} variant="article">
                      <Text variant="secondary">{mod.title}</Text>
                    </Link>
                  </ListItem>
                ))}
              </List>
            </Group>
          </LayoutNav>
          <LayoutMain>
            <MDX>
              <Box id="components" as="section" mb="s.40">
                <Text as="h2" variant="h2" pt="s.2" mb="s.20">
                  Components
                </Text>
                {components.map(([key, mod]) => (
                  <Box as="section" key={key} id={getId(key)}>
                    <mod.default />
                  </Box>
                ))}
              </Box>
              <Box id="primitives" as="section">
                <Text as="h2" variant="h2" pt="s.2" mb="s.20">
                  Primitives
                </Text>
                {primitives.map(([key, mod]) => (
                  <Box as="section" key={key} id={getId(key)}>
                    <mod.default />
                  </Box>
                ))}
              </Box>
            </MDX>
          </LayoutMain>
        </Layout>
      </Provider>
    </ColorSchemeProvider>
  )
}

export default Index
