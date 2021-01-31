import styled from '@emotion/styled'
import * as ThemeKey from '../constants/theme-key'
import { ThemeVariantProp } from '../constants/theme-variant-prop'
import { Text, TextComponent, TextProps } from '../text'

export interface LinkProps<E extends keyof React.ReactHTML = 'a'>
  extends TextProps<E>,
    LinkInnerProps {}

export interface LinkInnerProps {}

/** @private */
export interface LinkComponent<E extends keyof React.ReactHTML = 'a'>
  extends TextComponent<E, LinkInnerProps> {}

export const Link: LinkComponent = styled(Text)<LinkInnerProps>()

Link.defaultProps = {
  as: 'a',
  [ThemeVariantProp]: ThemeKey.LINK_VARIANTS,
}
