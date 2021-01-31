import styled from '@emotion/styled'
import { ThemeKey, Variant } from '../constants'
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
  [ThemeKey]: Variant.TEXT,
}
