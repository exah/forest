import styled from '@emotion/styled'
import { Box } from '../box'

export interface ScrollProps {}

export const Scroll = styled(Box)<ScrollProps>({
  overflow: 'auto',
})
