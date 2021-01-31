import styled from '@emotion/styled'
import * as ThemeKey from '../constants/theme-key'
import { ThemeVariantProp } from '../constants/theme-variant-prop'
import { Input, InputProps } from '../input'

export interface ButtonProps<E extends keyof React.ReactHTML = 'button'>
  extends InputProps<E>,
    ButtonInnerProps {}

export interface ButtonInnerProps {}

export const Button = styled(Input)<ButtonInnerProps>()

Button.defaultProps = {
  as: 'button',
  type: 'button',
  [ThemeVariantProp]: ThemeKey.BUTTON_VARIANTS,
}
