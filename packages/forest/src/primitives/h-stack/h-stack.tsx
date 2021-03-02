import styled from '@emotion/styled'
import { style, StyleProps } from 'pss'
import { Flex, FlexComponent, FlexProps } from '../flex'

export interface HStackProps<
  E extends string = 'div',
  V extends string = 'hStacks'
> extends Omit<FlexProps<E, V>, keyof HStackInnerProps>,
    HStackInnerProps {}

export interface HStackInnerProps
  extends StyleProps<'columnGap', 'space'>,
    StyleProps<'alignItems', 'align'> {}

/** @private */
export interface HStackComponent<
  E extends string = 'div',
  V extends string = 'hStacks'
> extends FlexComponent<E, V, HStackInnerProps> {}

export const HStack: HStackComponent = styled<any>(Flex)(
  {
    flexDirection: 'row',
    '> :not(:last-child):not(style)': { marginInlineEnd: 'var(--stack-space)' },
  },
  style('--stack-space', 'space', 'space'),
  style('alignItems', 'align')
)

HStack.defaultProps = {
  as: 'div',
  __key: 'hStacks',
}
