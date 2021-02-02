import styled from '@emotion/styled'
import * as ThemeKey from '../../constants/theme-key'
import { ThemeVariantProp } from '../../constants/theme-variant-prop'
import { Text, TextComponent, TextProps } from '../text'

export interface LinkProps<
  E extends keyof React.ReactHTML = 'a',
  V extends string = ThemeKey.LINK_VARIANTS
> extends TextProps<E, V>,
    LinkInnerProps {}

export interface LinkInnerProps {}

/** @private */
export interface LinkComponent<
  E extends keyof React.ReactHTML = 'a',
  V extends string = ThemeKey.LINK_VARIANTS
> extends TextComponent<E, V, LinkInnerProps> {}

export const Link: LinkComponent = styled(Text)<LinkInnerProps>()

Link.defaultProps = {
  as: 'a',
  [ThemeVariantProp]: ThemeKey.LINK_VARIANTS,
}
