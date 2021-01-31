import styled from '@emotion/styled'
import * as ThemeKey from '../constants/theme-key'
import { ThemeVariantProp } from '../constants/theme-variant-prop'
import { Input, InputProps } from '../input'

export interface TextareaProps<E extends keyof React.ReactHTML = 'select'>
  extends InputProps<E>,
    TextareaInnerProps {}

export interface TextareaInnerProps {}

export const Textarea = styled(Input)<TextareaInnerProps>()

Textarea.defaultProps = {
  as: 'textarea',
  [ThemeVariantProp]: ThemeKey.TEXTAREA_VARIANTS,
}
