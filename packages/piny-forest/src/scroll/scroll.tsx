import styled from '@emotion/styled'
import { Box, BoxProps } from '../box'

export interface ScrollProps<E extends keyof React.ReactHTML = 'div'>
  extends BoxProps<E>,
    ScrollInnerProps {}

export interface ScrollInnerProps {}

export const Scroll = styled(Box)<ScrollInnerProps>({
  overflow: 'auto',
})
