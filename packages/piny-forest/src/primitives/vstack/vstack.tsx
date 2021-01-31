import styled from '@emotion/styled'
import { Box, BoxComponent, BoxProps } from '../box'
import { style, StyleProps } from '../../utils'

export interface VStackProps<E extends keyof React.ReactHTML = 'div'>
  extends Omit<BoxProps<E>, keyof VStackInnerProps>,
    VStackInnerProps {}

export interface VStackInnerProps
  extends StyleProps<'gap'>,
    StyleProps<'alignItems', 'align'> {}

/** @private */
export interface VStackComponent<E extends keyof React.ReactHTML = 'div'>
  extends BoxComponent<E, VStackInnerProps> {}

export const VStack = styled(Box)<VStackInnerProps>(
  { display: 'flex', flexDirection: 'column' },
  style('gap'),
  style('alignItems', 'align')
)
