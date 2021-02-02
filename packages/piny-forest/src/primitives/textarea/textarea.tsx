import styled from '@emotion/styled'
import * as ThemeKey from '../../constants/theme-key'
import { ThemeVariantProp } from '../../constants/theme-variant-prop'
import { Input, InputComponent, InputProps } from '../input'

export interface TextareaProps<
  E extends keyof React.ReactHTML = 'textarea',
  V extends string = ThemeKey.TEXTAREA_VARIANTS
> extends InputProps<E, V>,
    TextareaInnerProps {}

export interface TextareaInnerProps {}

/** @private */
export interface TextareaComponent<
  E extends keyof React.ReactHTML = 'textarea',
  V extends string = ThemeKey.TEXTAREA_VARIANTS
> extends InputComponent<E, V, TextareaInnerProps> {}

export const Textarea: TextareaComponent = styled(Input)<TextareaInnerProps>()

Textarea.defaultProps = {
  as: 'textarea',
  [ThemeVariantProp]: ThemeKey.TEXTAREA_VARIANTS,
}
