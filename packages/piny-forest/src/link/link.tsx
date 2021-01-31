import styled from '@emotion/styled'
import { ThemeKey, Variant } from '../constants'
import { Text, TextProps } from '../text'

export interface LinkProps<E extends keyof React.ReactHTML = 'a'>
  extends TextProps<E>,
    LinkInnerProps {}

export interface LinkInnerProps {}

export const Link = styled(Text)<LinkInnerProps>()

Link.defaultProps = {
  as: 'a',
  [ThemeKey]: Variant.LINK,
}
