import styled from '@emotion/styled'
import * as ThemeKey from '../constants/theme-key'
import { ThemeVariantProp } from '../constants/theme-variant-prop'
import { Text, TextProps } from '../text'

export interface LabelProps<E extends keyof React.ReactHTML = 'label'>
  extends TextProps<E>,
    LabelInnerProps {}

export interface LabelInnerProps {}

export const Label = styled(Text)<LabelInnerProps>({
  display: 'block',
})

Label.defaultProps = {
  as: 'label',
  [ThemeVariantProp]: ThemeKey.TEXT_VARIANTS,
}
