import styled from '@emotion/styled'
import { style, StyleProps } from 'pss'
import { STACK_VARIANTS } from '../../constants/theme-key'
import { VARIANT_PROP } from '../../constants/variant-prop'
import { Box, BoxComponent, BoxProps } from '../box'

export interface VStackProps<
  E extends keyof React.ReactHTML = 'div',
  V extends string = STACK_VARIANTS
> extends Omit<BoxProps<E, V>, keyof VStackInnerProps>,
    VStackInnerProps {}

export interface VStackInnerProps
  extends StyleProps<'gap'>,
    StyleProps<'alignItems', 'align'> {}

/** @private */
export interface VStackComponent<
  E extends keyof React.ReactHTML = 'div',
  V extends string = STACK_VARIANTS
> extends BoxComponent<E, V, VStackInnerProps> {}

export const VStack: VStackComponent = styled<any>(Box)(
  { display: 'flex', flexDirection: 'column' },
  style('gap'),
  style('alignItems', 'align')
)

VStack.defaultProps = {
  as: 'div',
  [VARIANT_PROP]: STACK_VARIANTS,
}
