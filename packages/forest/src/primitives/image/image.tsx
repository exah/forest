import styled from '@emotion/styled'
import { IMAGE_VARIANTS } from '../../constants/theme-key'
import { VARIANT_PROP } from '../../constants/variant-prop'
import { Box, BoxComponent, BoxProps } from '../box'

export interface ImageProps<
  E extends keyof React.ReactHTML = 'img',
  V extends string = IMAGE_VARIANTS
> extends BoxProps<E, V> {}

export interface ImageInnerProps {}

/** @private */
export interface ImageComponent<
  E extends keyof React.ReactHTML = 'img',
  V extends string = IMAGE_VARIANTS
> extends BoxComponent<E, V, ImageInnerProps> {}

export const Image: ImageComponent = styled(Box)<ImageInnerProps>()

Image.defaultProps = {
  as: 'img',
  [VARIANT_PROP]: IMAGE_VARIANTS,
}
