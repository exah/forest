import styled from '@emotion/styled'
import { ThemeKey, Variant } from '../constants'
import { Input, InputProps } from '../input'

export interface ButtonProps<E extends keyof React.ReactHTML = 'button'>
  extends InputProps<E>,
    ButtonInnerProps {}

export interface ButtonInnerProps {}

export const Button = styled(Input)<ButtonInnerProps>()

Button.defaultProps = {
  as: 'button',
  type: 'button',
  [ThemeKey]: Variant.BUTTON,
}
