import styled from '@emotion/styled'
import { ThemeKey, Variant } from '../constants'
import { Text } from '../text'

export interface LinkProps {}

export const Link = styled(Text)<LinkProps>()

Link.defaultProps = {
  as: 'a',
  [ThemeKey]: Variant.LINK,
}
