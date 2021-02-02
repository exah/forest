import styled from '@emotion/styled'
import * as ThemeKey from '../../constants/theme-key'
import { ThemeVariantProp } from '../../constants/theme-variant-prop'
import { Box, BoxComponent, BoxProps } from '../box'
import { style, StyleProps } from '../../utils'

export interface VStackProps<
  E extends keyof React.ReactHTML = 'div',
  V extends string = ThemeKey.STACK_VARIANTS
> extends Omit<BoxProps<E, V>, keyof VStackInnerProps>,
    VStackInnerProps {}

export interface VStackInnerProps
  extends StyleProps<'gap'>,
    StyleProps<'alignItems', 'align'> {}

/** @private */
export interface VStackComponent<
  E extends keyof React.ReactHTML = 'div',
  V extends string = ThemeKey.STACK_VARIANTS
> extends BoxComponent<E, V, VStackInnerProps> {}

export const VStack: VStackComponent = styled(Box)<VStackInnerProps>(
  { display: 'flex', flexDirection: 'column' },
  style('gap'),
  style('alignItems', 'align')
)

VStack.defaultProps = {
  as: 'div',
  [ThemeVariantProp]: ThemeKey.STACK_VARIANTS,
}
