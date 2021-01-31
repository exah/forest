import styled from '@emotion/styled'
import * as ThemeKey from '../constants/theme-key'
import { ThemeVariantProp } from '../constants/theme-variant-prop'
import { Input, InputProps } from '../input'

export interface SelectProps<E extends keyof React.ReactHTML = 'select'>
  extends InputProps<E>,
    SelectInnerProps {}

export interface SelectInnerProps {}

export const Select = styled(Input)<SelectInnerProps>()

Select.defaultProps = {
  as: 'select',
  [ThemeVariantProp]: ThemeKey.SELECT_VARIANTS,
}
