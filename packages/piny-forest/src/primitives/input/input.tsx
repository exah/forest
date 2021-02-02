import styled from '@emotion/styled'
import * as ThemeKey from '../../constants/theme-key'
import { ThemeVariantProp } from '../../constants/theme-variant-prop'
import { Text, TextComponent, TextProps } from '../text'

export interface InputProps<
  E extends keyof React.ReactHTML = 'input',
  V extends string = ThemeKey.INPUT_VARIANTS
> extends TextProps<E, V>,
    InputInnerProps {}

export interface InputInnerProps {}

/** @private */
export interface InputComponent<
  E extends keyof React.ReactHTML = 'input',
  V extends string = ThemeKey.INPUT_VARIANTS,
  P extends {} = {}
> extends TextComponent<E, V, InputInnerProps & P> {}

export const Input: InputComponent = styled(Text)<InputInnerProps>({
  appearance: 'none',
  display: 'block',
})

Input.defaultProps = {
  as: 'input',
  [ThemeVariantProp]: ThemeKey.INPUT_VARIANTS,
}
