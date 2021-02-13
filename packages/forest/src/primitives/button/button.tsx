import styled from '@emotion/styled'
import { Input, InputComponent, InputProps } from '../input'

export interface ButtonProps<
  E extends keyof React.ReactHTML = 'button',
  V extends string = 'buttonVariants'
> extends InputProps<E, V>,
    ButtonInnerProps {}

export interface ButtonInnerProps {}

/** @private */
export interface ButtonComponent<
  E extends keyof React.ReactHTML = 'button',
  V extends string = 'buttonVariants'
> extends InputComponent<E, V, ButtonInnerProps> {}

export const Button: ButtonComponent = styled<any>(Input)()

Button.defaultProps = {
  as: 'button',
  type: 'button',
  '@pss/variant': 'buttonVariants',
}
