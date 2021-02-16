import { Box, BoxProps, Grid } from '../../primitives'

export interface LayoutProps extends Omit<BoxProps, 'ref'> {}

export const Layout = ({ children, pss, ...rest }: LayoutProps) => (
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

export interface LayoutNavProps<E extends keyof React.ReactHTML = 'nav'>
  extends Omit<BoxProps<E>, 'ref'> {}

export function LayoutNav<E extends keyof React.ReactHTML = 'nav'>({
  pss,
  children,
  ...rest
}: LayoutNavProps<E>) {
  return (
    <Box
      as="nav"
      pss={{
        gridArea: 'nav',
        marginX: 's.24',
        marginTop: 's.32',
        width: '10rem',
        ...pss,
      }}
      {...rest}
    >
      <Box pss={{ position: 'sticky', top: 's.32' }}>{children}</Box>
    </Box>
  )
}

export interface LayoutAsideProps<E extends keyof React.ReactHTML = 'aside'>
  extends Omit<BoxProps<E>, 'ref'> {}

export function LayoutAside<E extends keyof React.ReactHTML = 'aside'>({
  pss,
  ...rest
}: LayoutAsideProps<E>) {
  return <LayoutNav as="aside" pss={{ gridArea: 'aside', ...pss }} {...rest} />
}

export interface LayoutMainProps<E extends keyof React.ReactHTML = 'main'>
  extends Omit<BoxProps<E>, 'ref'> {}

export function LayoutMain<E extends keyof React.ReactHTML = 'main'>({
  pss,
  ...rest
}: LayoutMainProps<E>) {
  return (
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
}
