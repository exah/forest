import { rem } from 'pss'

const breakpoints = {
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
} as const

const colors = {
  primary: '#0089FF',
  accent: '#F100E8',
  danger: '#ff4d46',
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

const fonts = {
  primary: `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif`,
  code: `monospace`,
} as const

const fontSizes = {
  h1: rem(28),
  h2: rem(22),
  h3: rem(18),
  primary: rem(16),
  secondary: rem(14),
  small: rem(12),
} as const

const fontWeights = {
  h1: 900,
  h2: 900,
  bold: 600,
  semi: 500,
  body: 400,
} as const

const lineHeights = {
  h1: 40 / 28,
  h2: 32 / 22,
  h3: 24 / 18,
  primary: 24 / 16,
  secondary: 20 / 14,
  small: 16 / 12,
} as const

const radii = {
  'block-code': 4,
  'inline-code': 2,
} as const

const shadows = {
  level: {
    10: '0 0 8px rgba(0, 0, 0, 0.08)',
    20: '0 0 16px rgba(0, 0, 0, 0.16)',
    25: '0 0 16px rgba(0, 0, 0, 0.20)',
  },
} as const

const space = {
  0: 0,
  2: rem(2),
  4: rem(4),
  8: rem(8),
  12: rem(12),
  16: rem(16),
  20: rem(20),
  24: rem(24),
  28: rem(28),
  32: rem(32),
  40: rem(40),
  48: rem(48),
} as const

const sizes = {
  s: space,
} as const

const transitions = {
  text: 'color .2s',
  shadow: 'box-shadow .2s',
} as const

const boxes = {
  code: {
    backgroundColor: 'grey.10',
    borderRadius: 'block-code',
    minHeight: '100%',
  },
} as const

const images = {
  default: {
    display: 'block',
  },
} as const

const links = {
  default: {
    transition: 'text',
    ':any-link:hover': { color: 'primary' },
  },
  article: {
    ':visited:not([href^="#"])': { color: 'grey.50' },
    ':any-link': { textDecoration: 'underline' },
  },
} as const

const lists = {
  default: {
    listStyle: 'none',
  },
  nav: {
    display: 'grid',
    gridAutoFlow: 'row',
    gridAutoRows: rem(34),
    alignItems: 'center',
  },
} as const

const texts = {
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
  },
} as const

const inputs = {
  default: {
    display: 'block',
  },
} as const

const selects = { ...inputs } as const
const textareas = { ...inputs } as const
const labels = { ...inputs } as const

const buttons = {
  ...inputs,
  add: {
    size: rem(40),
    borderRadius: rem(40),
    padding: 's.12',
    svg: { display: 'block' },
    transition: 'shadow',
    boxShadow: 'level.20',
    ':hover': { boxShadow: 'level.25' },
    ':active': { boxShadow: 'level.10' },
  },
} as const

const items = {
  default: {
    display: 'block',
    color: 'grey.90',
    transition: 'text',
    ':hover, &[aria-current=page], &[aria-pressed=true]': { color: 'primary' },
  },
  accent: {
    ':hover, &[aria-current=page], &[aria-pressed=true]': { color: 'accent' },
  },
} as const

export const Theme = {
  breakpoints,
  colors,
  fonts,
  fontSizes,
  fontWeights,
  lineHeights,
  radii,
  shadows,
  sizes,
  space: sizes,
  transitions,
  boxes,
  buttons,
  images,
  inputs,
  labels,
  links,
  lists,
  selects,
  textareas,
  texts,
  items,
} as const

export type Theme = typeof Theme
