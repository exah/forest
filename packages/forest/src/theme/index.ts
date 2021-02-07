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
  boxVariants: {
    code: {
      backgroundColor: 'grey.100',
      borderRadius: 'block-code',
      minHeight: '100%',
    },
  },
  buttonVariants: {},
  colors: {
    accent: '#F100E8',
    primary: '#0089FF',
    foreground: '#333333',
    background: '#ffffff',
    shadow: 'rgba(0, 0, 0, 0.175215)',
    grey: {
      100: '#f8f8f8',
      200: '#eeeeee',
      300: '#cccccc',
      400: '#bbbbbb',
      500: '#aaaaaa',
      600: '#999999',
      900: '#333333',
    },
  },
  durations: {},
  fonts: {
    primary: `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif`,
  },
  fontSizes: {
    h1: rem(28),
    h2: rem(22),
    h3: rem(18),
    primary: rem(16),
    secondary: rem(14),
    small: rem(12),
  },
  fontWeights: {
    h1: 900,
    h2: 900,
    bold: 600,
    semi: 500,
    body: 400,
  },
  gridVariants: {},
  imageVariants: {
    default: { display: 'block' },
  },
  inputVariants: {
    default: { display: 'block' },
  },
  labelVariants: {
    default: { display: 'block' },
  },
  letterSpacings: {
    h1: px(0.35),
    h2: px(0.35),
  },
  lineHeights: {
    h1: 34 / 28,
    h2: 28 / 22,
    h3: 22 / 18,
    primary: 22 / 16,
    secondary: 18 / 14,
    small: 14 / 12,
  },
  linkVariants: {
    default: { ':hover': { color: 'primary' } },
    article: { ':link': { textDecoration: 'underline' } },
  },
  listVariants: {
    default: { listStyle: 'none' },
  },
  opacities: {},
  radii: {
    'block-code': 4,
    'inline-code': 2,
  },
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
    h1: {
      fontFamily: 'primary',
      fontSize: 'h1',
      lineHeight: 'h1',
      fontWeight: 'h1',
      letterSpacing: 'h1',
    },
    h2: {
      fontFamily: 'primary',
      fontSize: 'h2',
      lineHeight: 'h2',
      fontWeight: 'h2',
      letterSpacing: 'h2',
    },
    h3: {
      fontFamily: 'primary',
      fontSize: 'h3',
      lineHeight: 'h3',
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
