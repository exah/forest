import styled from '@emotion/styled'
import { Input, InputComponent, InputProps } from '../input'

export interface SelectProps<
  E extends keyof React.ReactHTML = 'select',
  V extends string = 'selectVariants'
> extends InputProps<E, V>,
    SelectInnerProps {}

export interface SelectInnerProps {}

/** @private */
export interface SelectComponent<
  E extends keyof React.ReactHTML = 'select',
  V extends string = 'selectVariants'
> extends InputComponent<E, V> {}

export const Select: SelectComponent = styled<any>(Input)()

Select.defaultProps = {
  as: 'select',
  __key: 'selectVariants',
}
