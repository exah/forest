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
  primary: 'var(--colors-primary, #0089FF)',
  accent: 'var(--colors-accent, #F100E8)',
  danger: 'var(--colors-danger, #ff4d46)',
  foreground: 'var(--colors-foreground, #222222)',
  background: 'var(--colors-background, #ffffff)',
  grey: {
    10: 'var(--colors-grey-10, #f8f8f8)',
    20: 'var(--colors-grey-20, #eeeeee)',
    30: 'var(--colors-grey-30, #cccccc)',
    40: 'var(--colors-grey-40, #bbbbbb)',
    50: 'var(--colors-grey-50, #999999)',
    60: 'var(--colors-grey-60, #777777)',
    70: 'var(--colors-grey-70, #555555)',
    80: 'var(--colors-grey-80, #444444)',
    90: 'var(--colors-grey-90, #222222)',
  },
} as const

const fonts = {
  primary: `var(--fonts-primary, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif)`,
  code: `var(--fonts-code, monospace)`,
} as const

const fontSizes = {
  h1: `var(--fontSizes-h1, ${rem(28)})`,
  h2: `var(--fontSizes-h2, ${rem(22)})`,
  h3: `var(--fontSizes-h3, ${rem(18)})`,
  primary: `var(--fontSizes-primary, ${rem(16)})`,
  secondary: `var(--fontSizes-secondary, ${rem(14)})`,
  small: `var(--fontSizes-small, ${rem(12)})`,
} as const

const fontWeights = {
  h1: `var(--fontWeights-h1, ${900})`,
  h2: `var(--fontWeights-h2, ${900})`,
  bold: `var(--fontWeights-bold, ${600})`,
  semi: `var(--fontWeights-semi, ${500})`,
  body: `var(--fontWeights-body, ${400})`,
} as const

const lineHeights = {
  h1: `var(--lineHeights-h1, ${40 / 28})`,
  h2: `var(--lineHeights-h2, ${32 / 22})`,
  h3: `var(--lineHeights-h3, ${24 / 18})`,
  primary: `var(--lineHeights-primary, ${24 / 16})`,
  secondary: `var(--lineHeights-secondary, ${20 / 14})`,
  small: `var(--lineHeights-small, ${16 / 12})`,
} as const

const shadows = {
  level: {
    10: 'var(--shadows-level-10, 0 0 8px rgba(0, 0, 0, 0.08))',
    20: 'var(--shadows-level-20, 0 0 16px rgba(0, 0, 0, 0.16))',
    25: 'var(--shadows-level-25, 0 0 16px rgba(0, 0, 0, 0.20))',
  },
} as const

const space = {
  0: `var(--space-0, 0)`,
  2: `var(--space-2, ${rem(2)})`,
  4: `var(--space-4, ${rem(4)})`,
  8: `var(--space-8, ${rem(8)})`,
  12: `var(--space-12, ${rem(12)})`,
  16: `var(--space-16, ${rem(16)})`,
  20: `var(--space-20, ${rem(20)})`,
  24: `var(--space-24, ${rem(24)})`,
  28: `var(--space-28, ${rem(28)})`,
  32: `var(--space-32, ${rem(32)})`,
  40: `var(--space-40, ${rem(40)})`,
  48: `var(--space-48, ${rem(48)})`,
} as const

const sizes = {
  s: space,
  button: {
    md: `var(--sizes-button-md, ${rem(40)})`,
  },
} as const

const radii = {
  button: {
    md: `var(--radii-button-md, ${sizes.button.md})`,
  },
  code: {
    block: `var(--radii-block-code, ${rem(4)})`,
    inline: `var(--radii-block-code, ${rem(2)})`,
  },
} as const

const durations = {
  sm: `var(--durations-sm, .2s)`,
}

const transitions = {
  text: `var(--transitions-text, color ${durations.sm})`,
  shadow: `var(--transitions-shadow, box-shadow ${durations.sm})`,
} as const

const boxes = {
  code: {
    backgroundColor: 'grey.10',
    borderRadius: 'code.block',
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
    size: 'button.md',
    borderRadius: 'button.md',
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
