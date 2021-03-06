import { em, rem, px } from 'pss'

const breakpoints = {
  /** all screens */
  $: null,
  /** \> 375px (~mobile) */
  $sm: `(min-width: ${em(320)})`,
  /** \> 768px  (~tablet) */
  $md: `(min-width: ${em(768)})`,
  /** \> 1024px (~laptop) */
  $lg: `(min-width: ${em(1024)})`,
  /** \> 1280px (~desktop) */
  $xl: `(min-width: ${em(1280)})`,
  /** dark mode */
  $dark: '(prefers-color-scheme: dark)',
} as const

const light = null
const dark = {
  '--colors-grey-10': '#222222',
  '--colors-grey-20': '#444444',
  '--colors-grey-30': '#555555',
  '--colors-grey-40': '#777777',
  '--colors-grey-50': '#999999',
  '--colors-grey-60': '#bbbbbb',
  '--colors-grey-70': '#cccccc',
  '--colors-grey-80': '#eeeeee',
  '--colors-grey-90': '#f6f8fa',
  '--colors-foreground': '#ffffff',
  '--colors-background': '#000000',
  '--colors-elevated-background': '#111111',
  '--colors-elevated-button': '#222222',
}

const colorSchemes = {
  auto: { $: light, $dark: dark },
  dark,
  light,
}

const colors = {
  primary: 'var(--colors-primary, #0089ff)',
  accent: 'var(--colors-accent, #f100e8)',
  danger: 'var(--colors-danger, #ff4d46)',
  foreground: 'var(--colors-foreground, #000000)',
  background: 'var(--colors-background, #ffffff)',
  grey: {
    10: 'var(--colors-grey-10, #f6f8fa)',
    20: 'var(--colors-grey-20, #eeeeee)',
    30: 'var(--colors-grey-30, #cccccc)',
    40: 'var(--colors-grey-40, #bbbbbb)',
    50: 'var(--colors-grey-50, #999999)',
    60: 'var(--colors-grey-60, #777777)',
    70: 'var(--colors-grey-70, #555555)',
    80: 'var(--colors-grey-80, #444444)',
    90: 'var(--colors-grey-90, #222222)',
  },
  elevated: {
    background: 'var(--colors-elevated-background, #ffffff)',
    button: 'var(--colors-elevated-button, #ffffff)',
  },
  faded: {
    danger: 'var(--colors-faded-danger, rgba(255, 77, 70, 0.10))',
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
  tertiary: `var(--fontSizes-tertiary, ${rem(12)})`,
} as const

const fontWeights = {
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
  tertiary: `var(--lineHeights-tertiary, ${16 / 12})`,
} as const

const shadows = {
  level: {
    10: 'var(--shadows-level-10, 0 0 8px rgba(0, 0, 0, 0.08))',
    20: 'var(--shadows-level-20, 0 0 16px rgba(0, 0, 0, 0.16))',
    25: 'var(--shadows-level-25, 0 0 16px rgba(0, 0, 0, 0.25))',
    40: 'var(--shadows-level-40, 0 0 48px rgba(0, 0, 0, 0.10))',
  },
  focus: `var(--shadows-focus, 0 0 0 2px ${colors.primary})`,
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
  layout: {
    side: `var(--sizes-layout-side, ${rem(160)})`,
  },
} as const

const radii = {
  round: px(9999),
  form: {
    md: `var(--radii-form, ${rem(40)})`,
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
  background: `var(--transitions-background, background-color ${durations.sm})`,
  shadow: `var(--transitions-shadow, box-shadow ${durations.sm})`,
  button: [
    `var(--transitions-text, color ${durations.sm})`,
    `var(--transitions-background, background-color ${durations.sm})`,
    `var(--transitions-shadow, box-shadow ${durations.sm})`,
  ].join(),
} as const

const boxes = {
  code: {
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
    fontWeight: 'bold',
  },
  h2: {
    fontFamily: 'primary',
    fontSize: 'h2',
    lineHeight: 'h2',
    fontWeight: 'bold',
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
  tertiary: {
    fontFamily: 'primary',
    fontSize: 'tertiary',
    lineHeight: 'tertiary',
    fontWeight: 'body',
  },
  code: {
    fontFamily: 'code',
  },
} as const

const inputs = {
  default: {
    ...texts.primary,
    display: 'block',
    paddingX: 's.20',
    paddingY: 's.8',
    borderRadius: 'round',
    backgroundColor: 'grey.10',
    ':focus': {
      outline: 'none',
      boxShadow: 'focus',
    },
    ':invalid': {
      boxShadow: 'none',
      backgroundColor: 'faded.danger',
    },
  },
} as const

const textareas = {
  default: {
    display: 'block',
  },
} as const

const labels = {
  default: {
    display: 'block',
    borderRadius: 'round',
  },
} as const

const actions = {
  default: {
    ...texts.secondary,
    display: 'block',
    color: 'grey.50',
    transition: 'text',
    ':hover': { color: 'grey.80' },
  },
  primary: { color: 'primary', ':hover': { color: 'primary' } },
  secondary: null,
  tertiary: { ...texts.tertiary },
  accent: { ':hover': { color: 'accent' } },
  danger: { ':hover': { color: 'danger' } },
} as const

const buttons = {
  default: {
    display: 'block',
  },
  black: {
    ...texts.primary,
    width: '100%',
    height: 'button.md',
    maxWidth: rem(304),
    paddingX: 's.20',
    paddingY: 's.8',
    borderRadius: 'round',
    boxShadow: 'level.25',
    backgroundColor: 'foreground',
    color: 'background',
    textAlign: 'center',
    transition: 'button',
    ':active': {
      color: 'grey.10',
      boxShadow: 'level.10',
      backgroundColor: 'grey.90',
    },
    ':focus': {
      outline: 'none',
      color: 'white',
      backgroundColor: 'primary',
    },
  },
  round: {
    size: 'button.md',
    borderRadius: 'round',
    padding: 's.12',
    svg: { display: 'block' },
    transition: 'button',
    boxShadow: 'level.20',
    ':hover': { boxShadow: 'level.25' },
    ':active': { boxShadow: 'level.10' },
    color: 'foreground',
    backgroundColor: 'elevated.button',
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

export const root = {
  default: {
    ...texts.primary,
    fontSize: '100%',
    backgroundColor: 'background',
    color: 'foreground',
  },
}

export const Theme = {
  breakpoints,
  colors,
  colorSchemes,
  fonts,
  fontSizes,
  fontWeights,
  lineHeights,
  radii,
  shadows,
  sizes,
  space: sizes,
  transitions,
  actions,
  boxes,
  buttons,
  images,
  inputs,
  items,
  labels,
  links,
  lists,
  root,
  textareas,
  texts,
} as const

export type Theme = typeof Theme
