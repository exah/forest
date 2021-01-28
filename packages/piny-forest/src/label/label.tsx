import styled from '@emotion/styled'
import { ThemeKey, Variant } from '../constants'
import { Text } from '../text'

export interface LabelProps {}

export const Label = styled(Text)<LabelProps>({
  display: 'block',
})

Label.defaultProps = {
  as: 'label',
  [ThemeKey]: Variant.TEXT,
}
