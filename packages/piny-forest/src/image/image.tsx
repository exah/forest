import styled from '@emotion/styled'
import { ThemeKey, Variant } from '../constants'
import { Box, BoxProps } from '../box'

export interface ImageProps<E extends keyof React.ReactHTML = 'img'>
  extends BoxProps<E>,
    ImageInnerProps {}

export interface ImageInnerProps {}

export const Image = styled(Box)<ImageInnerProps>({ display: 'block' })

Image.defaultProps = {
  as: 'img',
  [ThemeKey]: Variant.IMAGE,
}
