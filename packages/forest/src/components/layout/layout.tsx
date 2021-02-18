import { Box, BoxProps, Grid } from '../../primitives'

export interface LayoutProps<E extends keyof React.ReactHTML>
  extends Omit<BoxProps<E>, 'ref'> {}

export const Layout = <E extends keyof React.ReactHTML = 'div'>({
  pss,
  children,
  ...rest
}: LayoutProps<E>) => (
  <Grid
    pss={{
      paddingBottom: 's.32',
      gridTemplate: `
        "nav"
        "aside"
        "main"
      `,
      $md: {
        gridTemplate: `
          "nav main aside" auto / auto 1fr auto
        `,
      },
      ...pss,
    }}
    {...rest}
  >
    {children}
  </Grid>
)

export interface LayoutMainProps<E extends keyof React.ReactHTML>
  extends LayoutProps<E> {}

export const LayoutMain = <E extends keyof React.ReactHTML = 'main'>({
  pss,
  ...rest
}: LayoutMainProps<E>) => (
  <Box
    as="main"
    pss={{
      gridArea: 'main',
      marginX: 's.24',
      marginTop: 's.32',
      ...pss,
    }}
    {...rest}
  />
)

export interface LayoutNavProps<E extends keyof React.ReactHTML>
  extends LayoutMainProps<E> {}

export const LayoutNav = <E extends keyof React.ReactHTML = 'nav'>({
  pss,
  children,
  ...rest
}: LayoutNavProps<E>) => (
  <LayoutMain
    as="nav"
    pss={{ gridArea: 'nav', width: '10rem', ...pss }}
    {...rest}
  >
    <Box pss={{ position: 'sticky', top: 's.32' }}>{children}</Box>
  </LayoutMain>
)

export interface LayoutAsideProps<E extends keyof React.ReactHTML>
  extends LayoutMainProps<E> {}

export const LayoutAside = <E extends keyof React.ReactHTML = 'aside'>({
  pss,
  ...rest
}: LayoutAsideProps<E>) => (
  <LayoutNav as="aside" pss={{ gridArea: 'aside', ...pss }} {...rest} />
)
