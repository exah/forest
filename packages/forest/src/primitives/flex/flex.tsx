import styled from '@emotion/styled'
import { Box, BoxComponent, BoxProps } from '../box'

export interface FlexProps<E extends string = 'div', V extends string = 'flexs'>
  extends Omit<BoxProps<E, V>, keyof FlexInnerProps>,
    FlexInnerProps {}

export interface FlexInnerProps {}

/** @private */
export interface FlexComponent<
  E extends string = 'div',
  V extends string = 'flexs',
  P = {}
> extends BoxComponent<E, V, FlexInnerProps & P> {}

export const Flex: FlexComponent = styled<any>(Box)({
  display: 'flex',
})

Flex.defaultProps = {
  as: 'div',
  __key: 'flexs',
}
