import styled from '@emotion/styled'
import * as ThemeKey from '../../constants/theme-key'
import { Box, BoxComponent, BoxProps } from '../box'

export interface ScrollProps<
  E extends keyof React.ReactHTML = 'div',
  V extends string = ThemeKey.BOX_VARIANTS
> extends BoxProps<E, V>,
    ScrollInnerProps {}

export interface ScrollInnerProps {}

/** @private */
export interface ScrollComponent<
  E extends keyof React.ReactHTML = 'div',
  V extends string = ThemeKey.BOX_VARIANTS
> extends BoxComponent<E, V, ScrollInnerProps> {}

export const Scroll: ScrollComponent = styled(Box)<ScrollInnerProps>({
  overflow: 'auto',
})
