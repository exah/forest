import styled from '@emotion/styled'
import * as ThemeKey from '../constants/theme-key'
import { ThemeVariantProp } from '../constants/theme-variant-prop'
import { Box, BoxProps } from '../box'

export interface ImageProps<E extends keyof React.ReactHTML = 'img'>
  extends BoxProps<E>,
    ImageInnerProps {}

export interface ImageInnerProps {}

export const Image = styled(Box)<ImageInnerProps>({ display: 'block' })

Image.defaultProps = {
  as: 'img',
  [ThemeVariantProp]: ThemeKey.IMAGE_VARIANTS,
}
