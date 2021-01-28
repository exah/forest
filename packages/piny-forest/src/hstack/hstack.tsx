import styled from '@emotion/styled'
import { Box } from '../box'
import { style, StyleProps } from '../utils'

export interface HStackProps
  extends StyleProps<'gap'>,
    StyleProps<'alignItems', 'align'> {}

export const HStack = styled(Box)<HStackProps>(
  { display: 'flex', flexDirection: 'row' },
  style('gap'),
  style('alignItems', 'align')
)
