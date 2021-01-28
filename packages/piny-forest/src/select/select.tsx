import styled from '@emotion/styled'
import { ThemeKey, Variant } from '../constants'
import { Input } from '../input'

export interface SelectProps {}

export const Select = styled(Input)<SelectProps>()

Select.defaultProps = {
  as: 'select',
  [ThemeKey]: Variant.SELECT,
}
