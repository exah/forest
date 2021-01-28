import styled from '@emotion/styled'
import { ThemeKey, Variant } from '../constants'
import { Input } from '../input'

export interface ButtonProps {}

export const Button = styled(Input)<ButtonProps>()

Button.defaultProps = {
  as: 'button',
  type: 'button',
  [ThemeKey]: Variant.BUTTON,
}
