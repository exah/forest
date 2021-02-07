import styled from '@emotion/styled'
import { TEXT_VARIANTS } from '../../constants/theme-key'
import { VARIANT_PROP } from '../../constants/variant-prop'
import { Text, TextComponent, TextProps } from '../text'

export interface LabelProps<
  E extends keyof React.ReactHTML = 'label',
  V extends string = TEXT_VARIANTS
> extends TextProps<E, V>,
    LabelInnerProps {}

export interface LabelInnerProps {}

/** @private */
export interface LabelComponent<
  E extends keyof React.ReactHTML = 'label',
  V extends string = TEXT_VARIANTS
> extends TextComponent<E, V, LabelInnerProps> {}

export const Label: LabelComponent = styled(Text)<LabelInnerProps>({
  display: 'block',
})

Label.defaultProps = {
  as: 'label',
  [VARIANT_PROP]: TEXT_VARIANTS,
}
