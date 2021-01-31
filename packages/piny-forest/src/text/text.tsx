import styled from '@emotion/styled'
import * as ThemeKey from '../constants/theme-key'
import { ThemeVariantProp } from '../constants/theme-variant-prop'
import { style, StyleProps } from '../utils'
import { Box, BoxComponent, BoxProps } from '../box'

export interface TextProps<E extends keyof React.ReactHTML = 'span'>
  extends BoxProps<E>,
    TextInnerProps {}

export interface TextInnerProps
  extends StyleProps<'fontFamily'>,
    StyleProps<'fontSize'>,
    StyleProps<'fontWeight'>,
    StyleProps<'letterSpacing'>,
    StyleProps<'lineHeight'>,
    StyleProps<'textAlign'>,
    StyleProps<'textDecoration'>,
    StyleProps<'textOverflow'>,
    StyleProps<'textTransform'>,
    StyleProps<'whiteSpace'> {}

/** @private */
export interface TextComponent<
  E extends keyof React.ReactHTML = 'span',
  Props extends {} = {}
> extends BoxComponent<E, TextInnerProps & Props> {}

export const Text: TextComponent = styled(Box)<TextInnerProps>(
  style('fontFamily'),
  style('fontSize'),
  style('fontWeight'),
  style('letterSpacing'),
  style('lineHeight'),
  style('textAlign'),
  style('textDecoration'),
  style('textOverflow'),
  style('textTransform'),
  style('whiteSpace')
)

Text.defaultProps = {
  as: 'span',
  [ThemeVariantProp]: ThemeKey.TEXT_VARIANTS,
}
