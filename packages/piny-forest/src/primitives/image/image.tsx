import styled from '@emotion/styled'
import * as ThemeKey from '../../constants/theme-key'
import { ThemeVariantProp } from '../../constants/theme-variant-prop'
import { Box, BoxComponent, BoxProps } from '../box'

export interface ImageProps<
  E extends keyof React.ReactHTML = 'img',
  V extends string = ThemeKey.IMAGE_VARIANTS
> extends BoxProps<E, V> {}

export interface ImageInnerProps {}

/** @private */
export interface ImageComponent<
  E extends keyof React.ReactHTML = 'img',
  V extends string = ThemeKey.IMAGE_VARIANTS
> extends BoxComponent<E, V, ImageInnerProps> {}

export const Image: ImageComponent = styled(Box)<ImageInnerProps>({
  display: 'block',
})

Image.defaultProps = {
  as: 'img',
  [ThemeVariantProp]: ThemeKey.IMAGE_VARIANTS,
}
