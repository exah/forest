import styled from '@emotion/styled'
import { Box } from '../box'
import { style, StyleProps } from '../utils'

export interface VStackProps
  extends StyleProps<'gap'>,
    StyleProps<'alignItems', 'align'> {}

export const VStack = styled(Box)<VStackProps>(
  { display: 'flex', flexDirection: 'column' },
  style('gap'),
  style('alignItems', 'align')
)
