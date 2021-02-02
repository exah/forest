import styled from '@emotion/styled'
import * as ThemeKey from '../../constants/theme-key'
import { ThemeVariantProp } from '../../constants/theme-variant-prop'
import { Box, BoxComponent, BoxProps } from '../box'
import { style, StyleProps } from '../../utils'

export interface HStackProps<
  E extends keyof React.ReactHTML = 'div',
  V extends string = ThemeKey.STACK_VARIANTS
> extends Omit<BoxProps<E, V>, keyof HStackInnerProps>,
    HStackInnerProps {}

export interface HStackInnerProps
  extends StyleProps<'gap'>,
    StyleProps<'alignItems', 'align'> {}

/** @private */
export interface HStackComponent<
  E extends keyof React.ReactHTML = 'div',
  V extends string = ThemeKey.STACK_VARIANTS
> extends BoxComponent<E, V, HStackInnerProps> {}

export const HStack: HStackComponent = styled(Box)<HStackInnerProps>(
  { display: 'flex', flexDirection: 'row' },
  style('gap'),
  style('alignItems', 'align')
)

HStack.defaultProps = {
  as: 'div',
  [ThemeVariantProp]: ThemeKey.STACK_VARIANTS,
}
