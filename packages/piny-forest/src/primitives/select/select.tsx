import styled from '@emotion/styled'
import * as ThemeKey from '../../constants/theme-key'
import { ThemeVariantProp } from '../../constants/theme-variant-prop'
import { Input, InputComponent, InputProps } from '../input'

export interface SelectProps<
  E extends keyof React.ReactHTML = 'select',
  V extends string = ThemeKey.SELECT_VARIANTS
> extends InputProps<E, V>,
    SelectInnerProps {}

export interface SelectInnerProps {}

/** @private */
export interface SelectComponent<
  E extends keyof React.ReactHTML = 'select',
  V extends string = ThemeKey.SELECT_VARIANTS
> extends InputComponent<E, V> {}

export const Select: SelectComponent = styled(Input)<SelectInnerProps>()

Select.defaultProps = {
  as: 'select',
  [ThemeVariantProp]: ThemeKey.SELECT_VARIANTS,
}
