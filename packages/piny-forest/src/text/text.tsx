import styled from '@emotion/styled'
import { ThemeKey, Variant } from '../constants'
import { style, StyleProps } from '../utils'
import { Box, BoxProps } from '../box'

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

export const Text = styled(Box)<TextInnerProps>(
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
  [ThemeKey]: Variant.TEXT,
}
