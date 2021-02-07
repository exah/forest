import styled from '@emotion/styled'
import { SELECT_VARIANTS } from '../../constants/theme-key'
import { VARIANT_PROP } from '../../constants/variant-prop'
import { Input, InputComponent, InputProps } from '../input'

export interface SelectProps<
  E extends keyof React.ReactHTML = 'select',
  V extends string = SELECT_VARIANTS
> extends InputProps<E, V>,
    SelectInnerProps {}

export interface SelectInnerProps {}

/** @private */
export interface SelectComponent<
  E extends keyof React.ReactHTML = 'select',
  V extends string = SELECT_VARIANTS
> extends InputComponent<E, V> {}

export const Select: SelectComponent = styled<any>(Input)()

Select.defaultProps = {
  as: 'select',
  [VARIANT_PROP]: SELECT_VARIANTS,
}
