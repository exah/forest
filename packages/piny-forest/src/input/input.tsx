import styled from '@emotion/styled'
import { ThemeKey, Variant } from '../constants'
import { Text, TextProps } from '../text'

export interface InputProps<E extends keyof React.ReactHTML = 'input'>
  extends TextProps<E>,
    InputInnerProps {}

export interface InputInnerProps {}

export const Input = styled(Text)<InputInnerProps>({
  appearance: 'none',
  display: 'block',
})

Input.defaultProps = {
  as: 'input',
  [ThemeKey]: Variant.INPUT,
}
