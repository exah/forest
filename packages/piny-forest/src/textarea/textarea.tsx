import styled from '@emotion/styled'
import { ThemeKey, Variant } from '../constants'
import { Input } from '../input'

export interface TextareaProps {}

export const Textarea = styled(Input)<TextareaProps>()

Textarea.defaultProps = {
  as: 'textarea',
  [ThemeKey]: Variant.TEXTAREA,
}
