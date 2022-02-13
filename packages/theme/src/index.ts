import { em, rem, px } from 'pss'

const HSLA_REGEX = /^hsla\((\d{1,3})\,\s(\d{1,3}\%)\,\s(\d{1,3}\%)\,\s(\d)\)$/

const alpha = <
  H extends number | string,
  S extends string,
  L extends string,
  A1 extends 1,
  A2 extends number
>(
  color: `hsla(${H}, ${S}, ${L}, ${A1})`,
  opacity: A2
) =>
  color.replace(
    HSLA_REGEX,
    `hsla($1, $2, $3, ${opacity})`
  ) as `hsla(${H}, ${S}, ${L}, ${A2})`

export const breakpoints = {
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

/** @private */
const shades = {
  blue: 'hsla(208, 100%, 50%, 1)',
  pink: 'hsla(302, 100%, 47%, 1)',
  red: 'hsla(2, 100%, 64%, 1)',
  black: 'hsla(0, 0%, 0%, 1)',
  white: 'hsla(0, 0%, 100%, 1)',
  grey: {
    95: 'hsla(0, 0%, 7%, 1)',
    90: 'hsla(0, 0%, 13%, 1)',
    80: 'hsla(0, 0%, 27%, 1)',
    50: 'hsla(0, 0%, 60%, 1)',
    20: 'hsla(0, 0%, 93%, 1)',
    10: 'hsla(210, 29%, 97%, 1)',
  },
} as const

/** @private */
const light = null

/** @private */
const dark = {
  '--c-fg': shades.white,
  '--c-bg': shades.black,
  '--c-grey-10': shades.grey[90],
  '--c-grey-20': shades.grey[80],
  '--c-grey-50': shades.grey[50],
  '--c-grey-80': shades.grey[20],
  '--c-grey-90': shades.grey[10],
  '--c-sw-bg-8': shades.grey[90],
  '--c-sw-bg-16': shades.grey[90],
  '--c-sw-bg-48': shades.grey[95],
  '--c-placeholder': alpha(shades.white, 0.5),
} as const

export const colorSchemes = {
  auto: { $: light, $dark: dark },
  dark,
  light,
} as const

export const colors = {
  fg: `var(--c-fg, ${shades.black})`,
  bg: `var(--c-bg, ${shades.white})`,
  blue: `var(--c-blue, ${shades.blue})`,
  pink: `var(--c-pink, ${shades.pink})`,
  red: `var(--c-red, ${shades.red})`,
  grey: {
    10: `var(--c-grey-10, ${shades.grey[10]})`,
    20: `var(--c-grey-20, ${shades.grey[20]})`,
    50: `var(--c-grey-50, ${shades.grey[50]})`,
    80: `var(--c-grey-80, ${shades.grey[80]})`,
    90: `var(--c-grey-90, ${shades.grey[90]})`,
  },
  faded: {
    blue: `var(--c-faded-blue, ${alpha(shades.blue, 0.05)})`,
    pink: `var(--c-faded-pink, ${alpha(shades.pink, 0.1)})`,
    red: `var(--c-faded-red, ${alpha(shades.red, 0.1)})`,
  },
  shadow: {
    bg: {
      8: `var(--c-sw-bg-8, ${shades.white})`,
      16: `var(--c-sw-bg-16, ${shades.white})`,
      48: `var(--c-sw-bg-48, ${shades.white})`,
    },
    black: {
      8: `var(--c-sw-black-8, ${alpha(shades.black, 0.08)})`,
      16: `var(--c-sw-black-16, ${alpha(shades.black, 0.16)})`,
      24: `var(--c-sw-black-24, ${alpha(shades.black, 0.24)})`,
    },
    blue: {
      50: `var(--c-sw-blue-50, ${alpha(shades.blue, 0.5)})`,
    },
    pink: {
      50: `var(--c-sw-pink-50, ${alpha(shades.pink, 0.5)})`,
    },
    red: {
      50: `var(--c-sw-red-50, ${alpha(shades.red, 0.5)})`,
    },
  },
  placeholder: `var(--c-placeholder, ${alpha(shades.black, 0.5)})`,
  overlay: `var(--c-overlay, ${alpha(shades.black, 0.8)})`,
} as const

export const fonts = {
  sans: `var(--f-sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji)`,
  code: `var(--f-code, monospace)`,
} as const

export const fontSizes = {
  h1: `var(--fs-h1, ${rem(28)})`,
  h2: `var(--fs-h2, ${rem(22)})`,
  h3: `var(--fs-h3, ${rem(18)})`,
  primary: `var(--fs-primary, ${rem(16)})`,
  secondary: `var(--fs-secondary, ${rem(14)})`,
  tertiary: `var(--fs-tertiary, ${rem(12)})`,
} as const

export const fontWeights = {
  600: `var(--fw-600, ${600})`,
  500: `var(--fw-500, ${500})`,
  400: `var(--fw-400, ${400})`,
} as const

export const lineHeights = {
  h1: `var(--lh-h1, ${40 / 28})`,
  h2: `var(--lh-h2, ${32 / 22})`,
  h3: `var(--lh-h3, ${24 / 18})`,
  primary: `var(--lh-primary, ${24 / 16})`,
  secondary: `var(--lh-secondary, ${20 / 14})`,
  tertiary: `var(--lh-tertiary, ${16 / 12})`,
} as const

export const space = {
  0: `var(--s-0, 0)`,
  2: `var(--s-2, ${rem(2)})`,
  4: `var(--s-4, ${rem(4)})`,
  8: `var(--s-8, ${rem(8)})`,
  12: `var(--s-12, ${rem(12)})`,
  16: `var(--s-16, ${rem(16)})`,
  20: `var(--s-20, ${rem(20)})`,
  24: `var(--s-24, ${rem(24)})`,
  28: `var(--s-28, ${rem(28)})`,
  32: `var(--s-32, ${rem(32)})`,
  40: `var(--s-40, ${rem(40)})`,
  48: `var(--s-48, ${rem(48)})`,
} as const

export const sizes = {
  s: space,
  button: {
    md: `var(--s-button-md, ${rem(40)})`,
  },
  layout: {
    side: `var(--s-layout-side, ${rem(208)})`,
  },
} as const

export const shadows = {
  8: {
    black: {
      8: `var(--sw-8-black-8, 0px 0px ${space[8]} ${colors.shadow.black[8]})`,
      16: `var(--sw-8-black-16, 0px 0px ${space[8]} ${colors.shadow.black[16]})`,
    },
  },
  16: {
    black: {
      16: `var(--sw-16-black-16, 0px 0px ${space[16]} ${colors.shadow.black[16]})`,
      24: `var(--sw-16-black-24, 0px 0px ${space[16]} ${colors.shadow.black[24]})`,
    },
    blue: {
      50: `var(--sw-16-blue-50, 0px 0px ${space[16]} ${colors.shadow.blue[50]})`,
    },
    pink: {
      50: `var(--sw-16-pink-50, 0px 0px ${space[16]} ${colors.shadow.pink[50]})`,
    },
    red: {
      50: `var(--sw-16-red-50, 0px 0px ${space[16]} ${colors.shadow.red[50]})`,
    },
  },
  48: {
    black: {
      8: `var(--sw-48-black-8, 0px 0px ${space[48]} ${colors.shadow.black[8]})`,
    },
  },
} as const

export const radii = {
  round: px(9999),
  form: {
    md: `var(--r-form-md, ${rem(40)})`,
  },
  code: {
    block: `var(--r-code-block, ${rem(4)})`,
    inline: `var(--r-code-inline, ${rem(2)})`,
  },
} as const

export const durations = {
  sm: `var(--d-sm, .2s)`,
} as const

export const transitions = {
  text: `var(--t-text, color ${durations.sm})`,
  background: `var(--t-background, background-color ${durations.sm})`,
  shadow: `var(--t-sw, box-shadow ${durations.sm})`,
  opacity: `var(--t-sw, opacity ${durations.sm})`,
  button: `var(--t-button, var(--t-text, color ${durations.sm}), var(--t-background, background-color ${durations.sm}), var(--t-sw, box-shadow ${durations.sm}))`,
} as const

export const boxes = {
  code: {
    borderRadius: 'code.block',
    minHeight: '100%',
  },
} as const

export const images = {
  default: {
    display: 'block',
  },
} as const

export const links = {
  default: {
    transition: 'text',
    ':any-link:hover': { color: 'blue' },
  },
  article: {
    ':any-link': { textDecoration: 'underline' },
  },
} as const

export const lists = {
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

export const texts = {
  h1: {
    fontFamily: 'sans',
    fontSize: 'h1',
    lineHeight: 'h1',
    fontWeight: 600,
  },
  h2: {
    fontFamily: 'sans',
    fontSize: 'h2',
    lineHeight: 'h2',
    fontWeight: 600,
  },
  h3: {
    fontFamily: 'sans',
    fontSize: 'h3',
    lineHeight: 'h3',
    fontWeight: 600,
  },
  h4: {
    fontFamily: 'sans',
    fontSize: 'primary',
    lineHeight: 'primary',
    fontWeight: 500,
  },
  h5: {
    fontFamily: 'sans',
    fontSize: 'secondary',
    lineHeight: 'secondary',
    fontWeight: 500,
  },
  primary: {
    fontFamily: 'sans',
    fontSize: 'primary',
    lineHeight: 'primary',
    fontWeight: 400,
  },
  secondary: {
    fontFamily: 'sans',
    fontSize: 'secondary',
    lineHeight: 'secondary',
    fontWeight: 400,
  },
  tertiary: {
    fontFamily: 'sans',
    fontSize: 'tertiary',
    lineHeight: 'tertiary',
    fontWeight: 400,
  },
  code: {
    fontFamily: 'code',
    fontWeight: 400,
  },
} as const

export const inputs = {
  default: {
    ...texts.primary,
    display: 'block',
    paddingX: 's.20',
    paddingY: 's.8',
    borderRadius: 'round',
    textOverflow: 'ellipsis',
    borderWidth: 2,
    borderStyle: 'solid',
    borderColor: 'transparent',
    backgroundColor: 'grey.10',
    ':focus, :focus-within': {
      outline: 'none',
      borderColor: 'blue',
      backgroundColor: 'faded.blue',
    },
    ':focus-within :focus': {
      outline: 'none',
    },
    ':invalid': {
      boxShadow: 'none',
      borderColor: 'red',
      backgroundColor: 'faded.red',
    },
    '::placeholder': {
      color: 'placeholder',
      opacity: 1,
    },
  },
} as const

export const textareas = {
  default: {
    display: 'block',
    width: '100%',
    resize: 'vertical',
  },
} as const

export const labels = {
  default: {
    display: 'block',
    borderRadius: 'round',
  },
} as const

export const actions = {
  default: {
    ...texts.secondary,
    display: 'block',
    color: 'grey.50',
    transition: 'text',
    ':hover': {
      color: 'grey.80',
    },
  },
  primary: {
    color: 'blue',
    ':hover': {
      color: 'blue',
    },
    ':focus': {
      backgroundColor: 'blue',
      color: 'white',
      outline: 'none',
    },
  },
  secondary: null,
  tertiary: {
    ...texts.tertiary,
  },
  accent: {
    ':hover': {
      color: 'pink',
    },
  },
  negative: {
    ':hover': {
      color: 'red',
    },
  },
} as const

export const buttons = {
  default: {
    display: 'block',
  },
  contrast: {
    ...texts.primary,
    width: '100%',
    height: 'button.md',
    maxWidth: rem(304),
    paddingX: 's.20',
    paddingY: 's.8',
    borderRadius: 'round',
    boxShadow: '16.black.24',
    backgroundColor: 'fg',
    color: 'bg',
    textAlign: 'center',
    transition: 'button',
    ':active': {
      color: 'grey.10',
      boxShadow: '8.black.8',
      backgroundColor: 'grey.90',
    },
    ':focus': {
      outline: 'none',
      color: 'white',
      boxShadow: '16.blue.50',
      backgroundColor: 'blue',
    },
  },
  round: {
    display: 'grid',
    gridAutoFlow: 'column',
    gridAutoColumns: 'max-content',
    maxWidth: 'max-content',
    gridGap: 's.12',
    height: 'button.md',
    borderRadius: 'round',
    padding: 's.12',
    svg: { display: 'block' },
    transition: 'button',
    boxShadow: '16.black.16',
    ':hover': { boxShadow: '16.black.24' },
    ':active': { boxShadow: '8.black.16' },
    color: 'fg',
    backgroundColor: 'shadow.bg.16',
    ...texts.primary,
    lineHeight: 1,
    textAlign: 'left',
    '> :last-child:not(:first-child)': {
      marginRight: 's.4',
    },
  },
} as const

export const items = {
  default: {
    display: 'block',
    color: 'grey.90',
    transition: 'text',
    ':hover, &[aria-current=page], &[aria-pressed=true]': { color: 'blue' },
  },
  accent: {
    ':hover, &[aria-current=page], &[aria-pressed=true]': { color: 'pink' },
  },
} as const

export const root = {
  default: {
    ...texts.primary,
    fontSize: '100%',
    backgroundColor: 'bg',
    color: 'fg',
  },
} as const

export const modals = {
  default: {
    position: 'fixed',
    size: '100%',
    top: 0,
    left: 0,
    overflow: 'auto',
  },
} as const

type Theme = typeof Theme
const Theme = {
  breakpoints,
  colorSchemes,
  colors,
  fonts,
  fontSizes,
  fontWeights,
  lineHeights,
  shadows,
  space: sizes,
  sizes,
  radii,
  durations,
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
  modals,
  textareas,
  texts,
  root,
} as const

export default Theme
