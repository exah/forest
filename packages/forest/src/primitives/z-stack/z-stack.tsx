import styled from '@emotion/styled'
import { Flex, FlexComponent, FlexProps } from '../flex'

export interface ZStackProps<
  E extends keyof React.ReactHTML = 'div',
  V extends string = 'zStackVariants'
> extends Omit<FlexProps<E, V>, keyof ZStackInnerProps>,
    ZStackInnerProps {}

/** @private */
export interface ZStackInnerProps {}

/** @private */
export interface ZStackComponent<
  E extends keyof React.ReactHTML = 'div',
  V extends string = 'zStackVariants'
> extends FlexComponent<E, V, ZStackInnerProps> {}

export const ZStack: ZStackComponent = styled<any>(Flex)({
  position: 'relative',
  '> *': { position: 'absolute' },
})

ZStack.defaultProps = {
  as: 'div',
  '@pss/variant': 'zStackVariants',
}
