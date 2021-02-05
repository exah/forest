import { style, StyleProps } from 'pss'
import styled from '@emotion/styled'
import * as ThemeKey from '../../constants/theme-key'
import { ThemeVariantProp } from '../../constants/theme-variant-prop'
import { Box, BoxComponent, BoxProps } from '../box'

export interface TextProps<
  E extends keyof React.ReactHTML = 'span',
  V extends string = ThemeKey.TEXT_VARIANTS
> extends Omit<BoxProps<E, V>, keyof TextInnerProps>,
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
  V extends string = ThemeKey.TEXT_VARIANTS,
  P extends {} = {}
> extends BoxComponent<E, V, TextInnerProps & P> {}

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