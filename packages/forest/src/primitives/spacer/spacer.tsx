import styled from '@emotion/styled'

export interface SpacerProps {}

export const Spacer = styled.span({
  '--stack-space': 'initial !important',
  flex: '1 1 0%',
})

Spacer.displayName = 'Spacer'
