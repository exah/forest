import { Box, BoxProps, Grid, GridProps } from '../../primitives'

type Variant = 'auto' | 'keep-horizontal'

export interface LayoutProps<E extends string>
  extends Omit<GridProps<E>, 'ref' | 'variant'> {
  variant?: Variant
}

const AUTO_VARIANT = {
  gridTemplate: `
    "nav" auto
    "aside" auto
    "main" 1fr
  `,
  $md: {
    gridTemplate: `
      "nav main aside" auto / auto 1fr auto
    `,
  },
}

const HORIZONTAL_VARIANT = {
  ...AUTO_VARIANT,
  gridTemplate: `
    "nav main aside" auto / 100% 100% 100%
  `,
  height: '100vh',
  overflowX: 'auto',
  overflowY: 'hidden',
  scrollSnapType: 'x mandatory',
  scrollBehavior: 'smooth',
  main: {
    overflow: 'auto',
  },
  $md: {
    ...AUTO_VARIANT.$md,
    height: 'auto',
    overflowX: 'visible',
    overflowY: 'visible',
    scrollSnapType: 'normal',
  },
}

export const Layout = <E extends string = 'div'>({
  pss,
  children,
  variant = 'auto',
  ...rest
}: LayoutProps<E>) => (
  <Grid
    pss={{
      ...(variant === 'keep-horizontal' ? HORIZONTAL_VARIANT : AUTO_VARIANT),
      ...pss,
    }}
    {...rest}
  >
    {children}
  </Grid>
)

export interface LayoutMainProps<E extends string>
  extends Omit<BoxProps<E>, 'ref'> {}

export const LayoutMain = <E extends string = 'main'>({
  pss,
  ...rest
}: LayoutMainProps<E>) => (
  <Box
    as="main"
    pss={{
      gridArea: 'main',
      scrollSnapAlign: 'start',
      scrollBehavior: 'smooth',
      padding: 's.16',
      $md: {
        paddingX: 's.24',
        paddingY: 's.32',
      },
      ...pss,
    }}
    {...rest}
  />
)

export interface LayoutNavProps<E extends string>
  extends Omit<BoxProps<E>, 'ref'> {}

export const LayoutNav = <E extends string = 'nav'>({
  pss,
  children,
  ...rest
}: LayoutNavProps<E>) => (
  <LayoutMain
    as="nav"
    pss={{
      gridArea: 'nav',
      overflow: 'auto',
      scrollSnapAlign: 'start',
      padding: 's.16',
      $md: {
        position: 'sticky',
        top: 0,
        width: 'layout.side',
        maxHeight: '100vh',
        paddingX: 's.24',
        paddingY: 's.32',
      },
      ...pss,
    }}
    {...rest}
  >
    {children}
  </LayoutMain>
)

export interface LayoutAsideProps<E extends string> extends LayoutNavProps<E> {}

export const LayoutAside = <E extends string = 'aside'>({
  pss,
  ...rest
}: LayoutAsideProps<E>) => (
  <LayoutNav as="aside" pss={{ gridArea: 'aside', ...pss }} {...rest} />
)
