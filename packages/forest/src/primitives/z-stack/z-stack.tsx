import styled from '@emotion/styled'
import { STACK_VARIANTS } from '../../constants/theme-key'
import { VARIANT_PROP } from '../../constants/variant-prop'
import { Flex, FlexComponent, FlexProps } from '../flex'

export interface ZStackProps<
  E extends keyof React.ReactHTML = 'div',
  V extends string = STACK_VARIANTS
> extends Omit<FlexProps<E, V>, keyof ZStackInnerProps>,
    ZStackInnerProps {}

export interface ZStackInnerProps {}

/** @private */
export interface ZStackComponent<
  E extends keyof React.ReactHTML = 'div',
  V extends string = STACK_VARIANTS
> extends FlexComponent<E, V, ZStackInnerProps> {}

export const ZStack: ZStackComponent = styled<any>(Flex)({
  position: 'relative',
  '> *': { position: 'absolute' },
})

ZStack.defaultProps = {
  as: 'div',
  [VARIANT_PROP]: STACK_VARIANTS,
}
