import styled from '@emotion/styled'
import { Text, TextComponent, TextProps } from '../text'

export interface LabelProps<
  E extends keyof React.ReactHTML = 'label',
  V extends string = 'labelVariants'
> extends TextProps<E, V>,
    LabelInnerProps {}

export interface LabelInnerProps {}

/** @private */
export interface LabelComponent<
  E extends keyof React.ReactHTML = 'label',
  V extends string = 'labelVariants'
> extends TextComponent<E, V, LabelInnerProps> {}

export const Label: LabelComponent = styled<any>(Text)()

Label.defaultProps = {
  as: 'label',
  '@pss/variant': 'labelVariants',
}
