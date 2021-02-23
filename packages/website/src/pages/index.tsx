import Head from 'next/head'
import { useState, useLayoutEffect, useEffect } from 'react'
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
  Select,
  Text,
  Theme,
} from 'piny-forest/src'
import { rem } from 'pss'
import { MDX, Logo } from '../components'

const context = require.context('piny-forest', true, /\.mdx$/)
const modules = context.keys().map((key) => [key, context(key)])

const components = modules.filter(([key]) => key.includes('/components/'))
const primitives = modules.filter(([key]) => key.includes('/primitives/'))

const useUniversalLayoutEffect =
  typeof window === 'undefined' ? useEffect : useLayoutEffect

type Mode = keyof Theme['colorSchemes']

function useLocalModeState(key: string = '@@piny-forest/mode') {
  const [current, setMode] = useState<Mode>('auto')

  useUniversalLayoutEffect(() => {
    const restored = window.localStorage.getItem(key) as Mode
    if (restored) setMode(restored)
  }, [])

  useEffect(() => {
    if (current) window.localStorage.setItem(key, current)
  }, [current])

  return [current, setMode] as const
}

function Index() {
  const [mode, setMode] = useLocalModeState()
  return (
    <Provider theme={Theme}>
      <Head>
        <title>Forest</title>
        <meta
          name="description"
          content="Component library and design system for piny.link"
        />
      </Head>
      <Text
        as="div"
        variant="primary"
        colorScheme={mode}
        fg="foreground"
        bg="background"
      >
        <Layout>
          <LayoutNav>
            <Group>
              <Link href="#top">
                <Box mb="s.20">
                  <Logo role="img" aria-label="Forest" />
                </Box>
              </Link>
            </Group>
            <Group>
              <Select
                value={mode}
                onChange={(event) => setMode(event.currentTarget.value as Mode)}
              >
                <option value="auto">Mode: Auto</option>
                <option value="light">Mode: Light</option>
                <option value="dark">Mode: Dark</option>
              </Select>
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
                    <Link href={`#${mod.id}`} h="s.32" variant="article">
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
                    <Link href={`#${mod.id}`} variant="article">
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
