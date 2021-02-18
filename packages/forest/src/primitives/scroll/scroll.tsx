import styled from '@emotion/styled'
import { Box, BoxComponent, BoxProps } from '../box'

export interface ScrollProps<
  E extends keyof React.ReactHTML = 'div',
  V extends string = 'scrollVariants'
> extends BoxProps<E, V>,
    ScrollInnerProps {}

export interface ScrollInnerProps {}

/** @private */
export interface ScrollComponent<
  E extends keyof React.ReactHTML = 'div',
  V extends string = 'scrollVariants'
> extends BoxComponent<E, V, ScrollInnerProps> {}

export const Scroll: ScrollComponent = styled<any>(Box)({
  overflow: 'auto',
})

Scroll.defaultProps = {
  as: 'div',
  __key: 'scrollVariants',
}
