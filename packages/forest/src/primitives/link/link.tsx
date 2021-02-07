import styled from '@emotion/styled'
import { LINK_VARIANTS } from '../../constants/theme-key'
import { VARIANT_PROP } from '../../constants/variant-prop'
import { Text, TextComponent, TextProps } from '../text'

export interface LinkProps<
  E extends keyof React.ReactHTML = 'a',
  V extends string = LINK_VARIANTS
> extends TextProps<E, V>,
    LinkInnerProps {}

export interface LinkInnerProps {}

/** @private */
export interface LinkComponent<
  E extends keyof React.ReactHTML = 'a',
  V extends string = LINK_VARIANTS
> extends TextComponent<E, V, LinkInnerProps> {}

export const Link: LinkComponent = styled(Text)<LinkInnerProps>()

Link.defaultProps = {
  as: 'a',
  [VARIANT_PROP]: LINK_VARIANTS,
}
