import styled from '@emotion/styled'
import { SCROLL_VARIANTS } from '../../constants/theme-key'
import { Box, BoxComponent, BoxProps } from '../box'

export interface ScrollProps<
  E extends keyof React.ReactHTML = 'div',
  V extends string = SCROLL_VARIANTS
> extends BoxProps<E, V>,
    ScrollInnerProps {}

export interface ScrollInnerProps {}

/** @private */
export interface ScrollComponent<
  E extends keyof React.ReactHTML = 'div',
  V extends string = SCROLL_VARIANTS
> extends BoxComponent<E, V, ScrollInnerProps> {}

export const Scroll: ScrollComponent = styled<any>(Box)({
  overflow: 'auto',
})
