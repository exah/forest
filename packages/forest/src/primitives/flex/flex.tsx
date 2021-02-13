import styled from '@emotion/styled'
import { FLEX_VARIANTS } from '../../constants/theme-key'
import { VARIANT_PROP } from '../../constants/variant-prop'
import { Box, BoxComponent, BoxProps } from '../box'

export interface FlexProps<
  E extends keyof React.ReactHTML = 'div',
  V extends string = FLEX_VARIANTS
> extends Omit<BoxProps<E, V>, keyof FlexInnerProps>,
    FlexInnerProps {}

export interface FlexInnerProps {}

/** @private */
export interface FlexComponent<
  E extends keyof React.ReactHTML = 'div',
  V extends string = FLEX_VARIANTS,
  P = {}
> extends BoxComponent<E, V, FlexInnerProps & P> {}

export const Flex: FlexComponent = styled<any>(Box)({
  display: 'flex',
})

Flex.defaultProps = {
  as: 'div',
  [VARIANT_PROP]: FLEX_VARIANTS,
}
