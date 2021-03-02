import styled from '@emotion/styled'
import { style, StyleProps } from 'pss'
import { Flex, FlexComponent, FlexProps } from '../flex'

export interface VStackProps<
  E extends string = 'div',
  V extends string = 'vStacks'
> extends Omit<FlexProps<E, V>, keyof VStackInnerProps>,
    VStackInnerProps {}

export interface VStackInnerProps
  extends StyleProps<'rowGap', 'space'>,
    StyleProps<'alignItems', 'align'> {}

/** @private */
export interface VStackComponent<
  E extends string = 'div',
  V extends string = 'vStacks'
> extends FlexComponent<E, V, VStackInnerProps> {}

export const VStack: VStackComponent = styled<any>(Flex)(
  {
    flexDirection: 'column',
    '> :not(:last-child):not(style)': { marginBlockEnd: 'var(--stack-space)' },
  },
  style('--stack-space', 'space', 'space'),
  style('alignItems', 'align')
)

VStack.defaultProps = {
  as: 'div',
  __key: 'vStacks',
}
