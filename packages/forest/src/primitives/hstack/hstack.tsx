import styled from '@emotion/styled'
import { style, StyleProps } from 'pss'
import { STACK_VARIANTS } from '../../constants/theme-key'
import { VARIANT_PROP } from '../../constants/variant-prop'
import { Flex, FlexComponent, FlexProps } from '../flex'

export interface HStackProps<
  E extends keyof React.ReactHTML = 'div',
  V extends string = STACK_VARIANTS
> extends Omit<FlexProps<E, V>, keyof HStackInnerProps>,
    HStackInnerProps {}

export interface HStackInnerProps
  extends StyleProps<'gap'>,
    StyleProps<'alignItems', 'align'> {}

/** @private */
export interface HStackComponent<
  E extends keyof React.ReactHTML = 'div',
  V extends string = STACK_VARIANTS
> extends FlexComponent<E, V, HStackInnerProps> {}

export const HStack: HStackComponent = styled<any>(Flex)(
  { flexDirection: 'row', '> *': { flex: '0 0 auto' } },
  style('gap'),
  style('alignItems', 'align')
)

HStack.defaultProps = {
  as: 'div',
  [VARIANT_PROP]: STACK_VARIANTS,
}
