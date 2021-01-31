import styled from '@emotion/styled'
import { Box, BoxProps } from '../box'
import { style, StyleProps } from '../utils'

export interface VStackProps<E extends keyof React.ReactHTML = 'div'>
  extends BoxProps<E>,
    VStackInnerProps {}

export interface VStackInnerProps
  extends StyleProps<'gap'>,
    StyleProps<'alignItems', 'align'> {}

export const VStack = styled(Box)<VStackInnerProps>(
  { display: 'flex', flexDirection: 'column' },
  style('gap'),
  style('alignItems', 'align')
)
