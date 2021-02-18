import styled from '@emotion/styled'
import { style, StyleProps } from 'pss'

import { Flex, FlexComponent, FlexProps } from '../flex'

export interface VStackProps<
  E extends keyof React.ReactHTML = 'div',
  V extends string = 'vStacks'
> extends Omit<FlexProps<E, V>, keyof VStackInnerProps>,
    VStackInnerProps {}

export interface VStackInnerProps
  extends StyleProps<'gap'>,
    StyleProps<'alignItems', 'align'> {}

/** @private */
export interface VStackComponent<
  E extends keyof React.ReactHTML = 'div',
  V extends string = 'vStacks'
> extends FlexComponent<E, V, VStackInnerProps> {}

export const VStack: VStackComponent = styled<any>(Flex)(
  { flexDirection: 'column', '> *': { flex: '0 0 auto' } },
  style('gap'),
  style('alignItems', 'align')
)

VStack.defaultProps = {
  as: 'div',
  __key: 'vStacks',
}
