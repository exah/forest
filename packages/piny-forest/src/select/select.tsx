import styled from '@emotion/styled'
import { ThemeKey, Variant } from '../constants'
import { Input, InputProps } from '../input'

export interface SelectProps<E extends keyof React.ReactHTML = 'select'>
  extends InputProps<E>,
    SelectInnerProps {}

export interface SelectInnerProps {}

export const Select = styled(Input)<SelectInnerProps>()

Select.defaultProps = {
  as: 'select',
  [ThemeKey]: Variant.SELECT,
}
