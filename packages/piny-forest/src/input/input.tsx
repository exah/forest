import styled from '@emotion/styled'
import * as ThemeKey from '../constants/theme-key'
import { ThemeVariantProp } from '../constants/theme-variant-prop'
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
  [ThemeVariantProp]: ThemeKey.INPUT_VARIANTS,
}
