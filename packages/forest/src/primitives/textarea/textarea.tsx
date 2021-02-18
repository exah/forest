import styled from '@emotion/styled'

import { Input, InputComponent, InputProps } from '../input'

export interface TextareaProps<
  E extends keyof React.ReactHTML = 'textarea',
  V extends string = 'textareaVariants'
> extends InputProps<E, V>,
    TextareaInnerProps {}

export interface TextareaInnerProps {}

/** @private */
export interface TextareaComponent<
  E extends keyof React.ReactHTML = 'textarea',
  V extends string = 'textareaVariants'
> extends InputComponent<E, V, TextareaInnerProps> {}

export const Textarea: TextareaComponent = styled<any>(Input)()

Textarea.defaultProps = {
  as: 'textarea',
  __key: 'textareaVariants',
}
