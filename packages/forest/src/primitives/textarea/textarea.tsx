import styled from '@emotion/styled'
import { TEXTAREA_VARIANTS } from '../../constants/theme-key'
import { VARIANT_PROP } from '../../constants/variant-prop'
import { Input, InputComponent, InputProps } from '../input'

export interface TextareaProps<
  E extends keyof React.ReactHTML = 'textarea',
  V extends string = TEXTAREA_VARIANTS
> extends InputProps<E, V>,
    TextareaInnerProps {}

export interface TextareaInnerProps {}

/** @private */
export interface TextareaComponent<
  E extends keyof React.ReactHTML = 'textarea',
  V extends string = TEXTAREA_VARIANTS
> extends InputComponent<E, V, TextareaInnerProps> {}

export const Textarea: TextareaComponent = styled<any>(Input)()

Textarea.defaultProps = {
  as: 'textarea',
  [VARIANT_PROP]: TEXTAREA_VARIANTS,
}
