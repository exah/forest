import styled from '@emotion/styled'
import { Box, BoxComponent, BoxProps } from '../box'

export interface FlexProps<
  E extends keyof React.ReactHTML = 'div',
  V extends string = 'flexVariants'
> extends Omit<BoxProps<E, V>, keyof FlexInnerProps>,
    FlexInnerProps {}

export interface FlexInnerProps {}

/** @private */
export interface FlexComponent<
  E extends keyof React.ReactHTML = 'div',
  V extends string = 'flexVariants',
  P = {}
> extends BoxComponent<E, V, FlexInnerProps & P> {}

export const Flex: FlexComponent = styled<any>(Box)({
  display: 'flex',
})

Flex.defaultProps = {
  as: 'div',
  '@pss/variant': 'flexVariants',
}
