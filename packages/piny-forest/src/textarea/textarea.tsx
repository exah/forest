import styled from '@emotion/styled'
import * as ThemeKey from '../constants/theme-key'
import { ThemeVariantProp } from '../constants/theme-variant-prop'
import { Input, InputComponent, InputProps } from '../input'

export interface TextareaProps<E extends keyof React.ReactHTML = 'textarea'>
  extends InputProps<E>,
    TextareaInnerProps {}

export interface TextareaInnerProps {}

/** @private */
export interface TextareaComponent<E extends keyof React.ReactHTML = 'textarea'>
  extends InputComponent<E, TextareaInnerProps> {}

export const Textarea: TextareaComponent = styled(Input)<TextareaInnerProps>()

Textarea.defaultProps = {
  as: 'textarea',
  [ThemeVariantProp]: ThemeKey.TEXTAREA_VARIANTS,
}
