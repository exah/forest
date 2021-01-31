import styled from '@emotion/styled'
import * as ThemeKey from '../constants/theme-key'
import { ThemeVariantProp } from '../constants/theme-variant-prop'
import { Text, TextProps } from '../text'

export interface LinkProps<E extends keyof React.ReactHTML = 'a'>
  extends TextProps<E>,
    LinkInnerProps {}

export interface LinkInnerProps {}

export const Link = styled(Text)<LinkInnerProps>()

Link.defaultProps = {
  as: 'a',
  [ThemeVariantProp]: ThemeKey.LINK_VARIANTS,
}
