import styled from '@emotion/styled'
import { Box, BoxComponent, BoxProps } from '../box'
import { style, StyleProps } from '../../utils'

export interface HStackProps<E extends keyof React.ReactHTML = 'div'>
  extends BoxProps<E>,
    HStackInnerProps {}

export interface HStackInnerProps
  extends StyleProps<'gap'>,
    StyleProps<'alignItems', 'align'> {}

/** @private */
export interface HStackComponent<E extends keyof React.ReactHTML = 'div'>
  extends BoxComponent<E, HStackInnerProps> {}

export const HStackComponent = styled(Box)<HStackInnerProps>(
  { display: 'flex', flexDirection: 'row' },
  style('gap'),
  style('alignItems', 'align')
)
