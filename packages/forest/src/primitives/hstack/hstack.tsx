import styled from '@emotion/styled'
import { style, StyleProps } from 'pss'
import { STACK_VARIANTS } from '../../constants/theme-key'
import { VARIANT_PROP } from '../../constants/variant-prop'
import { Box, BoxComponent, BoxProps } from '../box'

export interface HStackProps<
  E extends keyof React.ReactHTML = 'div',
  V extends string = STACK_VARIANTS
> extends Omit<BoxProps<E, V>, keyof HStackInnerProps>,
    HStackInnerProps {}

export interface HStackInnerProps
  extends StyleProps<'gap'>,
    StyleProps<'alignItems', 'align'> {}

/** @private */
export interface HStackComponent<
  E extends keyof React.ReactHTML = 'div',
  V extends string = STACK_VARIANTS
> extends BoxComponent<E, V, HStackInnerProps> {}

export const HStack: HStackComponent = styled(Box)<HStackInnerProps>(
  { display: 'flex', flexDirection: 'row' },
  style('gap'),
  style('alignItems', 'align')
)

HStack.defaultProps = {
  as: 'div',
  [VARIANT_PROP]: STACK_VARIANTS,
}
