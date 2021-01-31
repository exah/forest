import styled from '@emotion/styled'
import { Box, BoxComponent, BoxProps } from '../box'

export interface ScrollProps<E extends keyof React.ReactHTML = 'div'>
  extends BoxProps<E>,
    ScrollInnerProps {}

export interface ScrollInnerProps {}

/** @private */
export interface ScrollComponent<E extends keyof React.ReactHTML = 'div'>
  extends BoxComponent<E, ScrollInnerProps> {}

export const Scroll: ScrollComponent = styled(Box)<ScrollInnerProps>({
  overflow: 'auto',
})
