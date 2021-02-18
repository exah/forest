import styled from '@emotion/styled'
import { Text, TextComponent, TextProps } from '../text'

export interface InputProps<
  E extends keyof React.ReactHTML = 'input',
  V extends string = 'inputVariants'
> extends TextProps<E, V>,
    InputInnerProps {}

export interface InputInnerProps {}

/** @private */
export interface InputComponent<
  E extends keyof React.ReactHTML = 'input',
  V extends string = 'inputVariants',
  P extends {} = {}
> extends TextComponent<E, V, InputInnerProps & P> {}

export const Input: InputComponent = styled<any>(Text)()

Input.defaultProps = {
  as: 'input',
  __key: 'inputVariants',
}
