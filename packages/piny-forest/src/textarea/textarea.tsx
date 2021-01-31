import styled from '@emotion/styled'
import { ThemeKey, Variant } from '../constants'
import { Input, InputProps } from '../input'

export interface TextareaProps<E extends keyof React.ReactHTML = 'select'>
  extends InputProps<E>,
    TextareaInnerProps {}

export interface TextareaInnerProps {}

export const Textarea = styled(Input)<TextareaInnerProps>()

Textarea.defaultProps = {
  as: 'textarea',
  [ThemeKey]: Variant.TEXTAREA,
}
