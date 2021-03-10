import styled from '@emotion/styled'
import { style, StyleProps } from 'pss'
import { Flex, FlexComponent, FlexProps } from '../flex'

export interface StackProps<E extends string = 'div'>
  extends Omit<FlexProps<E, 'stacks'>, keyof StackInnerProps>,
    StackInnerProps {}

export interface StackInnerProps
  extends StyleProps<'rowGap', 'space'>,
    StyleProps<'alignItems', 'align'> {}

/** @private */
export interface StackComponent<E extends string = 'div'>
  extends FlexComponent<E, 'stacks', StackInnerProps> {}

/** @private Use `VStack` or `HStack` */
export const Stack: StackComponent = styled<any>(Flex)`
  > :not(:last-child) {
    ${style('--stack-space', 'space', 'space')}
  }

  ${style('alignItems', 'align')}
`

Stack.displayName = 'Stack'
Stack.defaultProps = { as: 'div', __key: 'stacks' }
