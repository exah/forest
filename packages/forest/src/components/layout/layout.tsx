import { Box, BoxProps, Grid } from '../../primitives'

export interface LayoutProps<E extends string>
  extends Omit<BoxProps<E>, 'ref'> {}

export const Layout = <E extends string = 'div'>({
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

export interface LayoutMainProps<E extends string> extends LayoutProps<E> {}

export const LayoutMain = <E extends string = 'main'>({
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

export interface LayoutNavProps<E extends string> extends LayoutMainProps<E> {}

export const LayoutNav = <E extends string = 'nav'>({
  pss,
  children,
  ...rest
}: LayoutNavProps<E>) => (
  <Box
    as="nav"
    pss={{
      gridArea: 'nav',
      width: 'layout.side',
      marginX: 's.24',
      ...pss,
    }}
    {...rest}
  >
    <Box
      pss={{
        position: 'sticky',
        top: 0,
        overflow: 'auto',
        maxHeight: '100vh',
        paddingTop: 's.32',
      }}
    >
      {children}
    </Box>
  </Box>
)

export interface LayoutAsideProps<E extends string>
  extends LayoutMainProps<E> {}

export const LayoutAside = <E extends string = 'aside'>({
  pss,
  ...rest
}: LayoutAsideProps<E>) => (
  <LayoutNav as="aside" pss={{ gridArea: 'aside', ...pss }} {...rest} />
)
