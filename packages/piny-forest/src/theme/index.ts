import { rem, px } from 'pss'

export const Theme = {
  breakpoints: {
    /** all screens */
    $: null,
    /** \> 375px (~mobile) */
    $sm: '(min-width: 320px)',
    /** \> 768px  (~tablet) */
    $md: '(min-width: 768px)',
    /** \> 1024px (~laptop) */
    $lg: '(min-width: 1024px)',
    /** \> 1280px (~desktop) */
    $xl: '(min-width: 1280px)',
  },
  borderStyles: {},
  borderWidths: {},
  borders: {},
  boxVariants: {},
  buttonVariants: {},
  colors: {
    primary: '#0089FF',
    accent: '#F100E8',
    faded: '#999999',
    foreground: '#333333',
    background: '#ffffff',
    shadow: `rgba(0, 0, 0, 0.175215)`,
  },
  durations: {},
  fonts: {
    primary: `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif`,
  },
  fontSizes: {
    logo: rem(28),
    heading: rem(18),
    primary: rem(16),
    secondary: rem(14),
    small: rem(12),
  },
  fontWeights: {
    logo: 900,
    bold: 600,
    semi: 500,
    body: 400,
  },
  gridVariants: {},
  imageVariants: {},
  inputVariants: {},
  letterSpacings: {
    logo: px(0.311111),
  },
  lineHeights: {
    logo: 33.41 / 28,
    heading: 21 / 18,
    primary: 19 / 16,
    secondary: 17 / 14,
    small: 14 / 12,
  },
  linkVariants: {},
  listVariants: {},
  opacities: {},
  radii: {},
  selectVariants: {},
  shadows: {},
  sizes: {},
  space: [
    0,
    rem(4),
    rem(8),
    rem(12),
    rem(16),
    rem(20),
    rem(24),
    rem(28),
    rem(32),
  ],
  textVariants: {
    logo: {
      fontFamily: 'primary',
      fontSize: 'logo',
      lineHeight: 'logo',
      fontWeight: 'logo',
      letterSpacing: 'logo',
    },
    heading: {
      fontFamily: 'primary',
      fontSize: 'heading',
      lineHeight: 'heading',
      fontWeight: 'bold',
    },
    primary: {
      fontFamily: 'primary',
      fontSize: 'primary',
      lineHeight: 'primary',
      fontWeight: 'body',
    },
    secondary: {
      fontFamily: 'primary',
      fontSize: 'secondary',
      lineHeight: 'secondary',
      fontWeight: 'body',
    },
    small: {
      fontFamily: 'primary',
      fontSize: 'small',
      lineHeight: 'small',
      fontWeight: 'body',
    },
  },
  textareaVariants: {},
  timings: {},
  transitions: {},
  zIndices: {},
}

export type Theme = typeof Theme
