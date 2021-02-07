import styled from '@emotion/styled'
import { BUTTON_VARIANTS } from '../../constants/theme-key'
import { VARIANT_PROP } from '../../constants/variant-prop'
import { Input, InputComponent, InputProps } from '../input'

export interface ButtonProps<
  E extends keyof React.ReactHTML = 'button',
  V extends string = typeof BUTTON_VARIANTS
> extends InputProps<E, V>,
    ButtonInnerProps {}

export interface ButtonInnerProps {}

/** @private */
export interface ButtonComponent<
  E extends keyof React.ReactHTML = 'button',
  V extends string = typeof BUTTON_VARIANTS
> extends InputComponent<E, V, ButtonInnerProps> {}

export const Button: ButtonComponent = styled<any>(Input)()

Button.defaultProps = {
  as: 'button',
  type: 'button',
  [VARIANT_PROP]: BUTTON_VARIANTS,
}
