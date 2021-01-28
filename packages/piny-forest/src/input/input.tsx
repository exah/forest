import styled from '@emotion/styled'
import { ThemeKey, Variant } from '../constants'
import { Text } from '../text'

export interface InputProps {}

export const Input = styled(Text)<InputProps>({
  appearance: 'none',
  display: 'block',
})

Input.defaultProps = {
  as: 'input',
  [ThemeKey]: Variant.INPUT,
}
