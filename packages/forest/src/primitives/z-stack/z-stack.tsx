import styled from '@emotion/styled'
import { Flex, FlexComponent, FlexProps } from '../flex'

export interface ZStackProps<
  E extends string = 'div',
  V extends string = 'zStacks'
> extends Omit<FlexProps<E, V>, keyof ZStackInnerProps>,
    ZStackInnerProps {}

/** @private */
export interface ZStackInnerProps {}

/** @private */
export interface ZStackComponent<
  E extends string = 'div',
  V extends string = 'zStacks'
> extends FlexComponent<E, V, ZStackInnerProps> {}

export const ZStack: ZStackComponent = styled<any>(Flex)({
  position: 'relative',
  '> *': { position: 'absolute' },
})

ZStack.defaultProps = {
  as: 'div',
  __key: 'zStacks',
}
