import styled from '@emotion/styled'
import { INPUT_VARIANTS } from '../../constants/theme-key'
import { VARIANT_PROP } from '../../constants/variant-prop'
import { Text, TextComponent, TextProps } from '../text'

export interface InputProps<
  E extends keyof React.ReactHTML = 'input',
  V extends string = INPUT_VARIANTS
> extends TextProps<E, V>,
    InputInnerProps {}

export interface InputInnerProps {}

/** @private */
export interface InputComponent<
  E extends keyof React.ReactHTML = 'input',
  V extends string = INPUT_VARIANTS,
  P extends {} = {}
> extends TextComponent<E, V, InputInnerProps & P> {}

export const Input: InputComponent = styled(Text)<InputInnerProps>({
  appearance: 'none',
  display: 'block',
})

Input.defaultProps = {
  as: 'input',
  [VARIANT_PROP]: INPUT_VARIANTS,
}
