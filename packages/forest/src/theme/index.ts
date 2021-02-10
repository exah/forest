import { rem } from 'pss'

export const Color = {
  primary: '#0089FF',
  highlight: '#F100E8',
  destructive: '#ff4d46',
  foreground: '#222222',
  background: '#ffffff',
  grey: {
    10: '#f8f8f8',
    20: '#eeeeee',
    30: '#cccccc',
    40: '#bbbbbb',
    50: '#999999',
    60: '#777777',
    70: '#555555',
    80: '#444444',
    90: '#222222',
  },
} as const

export type Color = typeof Color

export const Space = {
  0: 0,
  4: rem(4),
  8: rem(8),
  12: rem(12),
  16: rem(16),
  20: rem(20),
  24: rem(24),
  28: rem(28),
  32: rem(32),
} as const

export type Space = typeof Space

export const Size = {
  s: Space,
} as const

export type Size = typeof Size

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
  borders: {},
  borderStyles: {},
  borderWidths: {},
  colors: Color,
  durations: {},
  fonts: {
    primary: `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif`,
    code: `monospace`,
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
  letterSpacings: {},
  lineHeights: {
    h1: 40 / 28,
    h2: 32 / 22,
    h3: 24 / 18,
    primary: 24 / 16,
    secondary: 20 / 14,
    small: 16 / 12,
  },
  opacities: {},
  radii: {
    'block-code': 4,
    'inline-code': 2,
  },
  shadows: {
    image: '0 0 15px rgba(0, 0, 0, 0.15)',
  },
  sizes: Size,
  space: Size,
  timings: {},
  animations: {},
  transitions: {
    text: 'color .2s',
  },
  zIndices: {},
  boxVariants: {
    code: {
      backgroundColor: 'grey.10',
      borderRadius: 'block-code',
      minHeight: '100%',
    },
  },
  gridVariants: {},
  imageVariants: { default: { display: 'block' } },
  linkVariants: {
    default: {
      transition: 'text',
      ':any-link:hover': { color: 'primary' },
    },
    article: {
      ':any-link': { textDecoration: 'underline' },
    },
  },
  listVariants: { default: { listStyle: 'none' } },
  stackVariants: {},
  scrollVariants: {},
  textVariants: {
    h1: {
      fontFamily: 'primary',
      fontSize: 'h1',
      lineHeight: 'h1',
      fontWeight: 'h1',
    },
    h2: {
      fontFamily: 'primary',
      fontSize: 'h2',
      lineHeight: 'h2',
      fontWeight: 'h2',
    },
    h3: {
      fontFamily: 'primary',
      fontSize: 'h3',
      lineHeight: 'h3',
      fontWeight: 'bold',
    },
    h4: {
      fontFamily: 'primary',
      fontSize: 'primary',
      lineHeight: 'primary',
      fontWeight: 'semi',
    },
    h5: {
      fontFamily: 'primary',
      fontSize: 'secondary',
      lineHeight: 'secondary',
      fontWeight: 'semi',
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
    code: {
      fontFamily: 'code',
      fontSize: '0.9em',
      lineHeight: 'primary',
      fontWeight: 'body',
    },
  },
  buttonVariants: { default: { display: 'block' } },
  inputVariants: { default: { display: 'block' } },
  selectVariants: { default: { display: 'block' } },
  textareaVariants: { default: { display: 'block' } },
  labelVariants: { default: { display: 'block' } },
}

export type Theme = typeof Theme
