import styled from '@emotion/styled'
import { ThemeKey, Variant } from '../constants'
import { Box } from '../box'

export interface ImageProps {}

export const Image = styled(Box)<ImageProps>({ display: 'block' })

Image.defaultProps = {
  as: 'img',
  [ThemeKey]: Variant.IMAGE,
}
