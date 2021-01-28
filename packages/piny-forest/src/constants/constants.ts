export const ThemeKey = '@pss/variant/key'

export const Variant = {
  BOX: 'boxStyles',
  BUTTON: 'buttonStyles',
  IMAGE: 'imageStyles',
  LINK: 'linkStyles',
  TEXT: 'textStyles',
  LIST: 'listStyles',
  INPUT: 'inputStyles',
  TEXTAREA: 'textareaStyles',
  SELECT: 'selectStyles',
} as const

export type Variant = typeof Variant[keyof typeof Variant]
