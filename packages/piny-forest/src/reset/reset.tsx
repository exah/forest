import styled from '@emotion/styled'
import { Base, BaseProps } from '../base'

export interface ResetProps<E extends keyof React.ReactHTML = 'div'>
  extends BaseProps<E>,
    ResetInnerProps {}

export interface ResetInnerProps {}

export const Reset = styled(Base)<ResetInnerProps>({
  margin: 0,
  padding: 0,
  border: 0,
  minWidth: 0,
  borderRadius: 0,
  background: 'none',
  font: 'inherit',
  color: 'inherit',
  textAlign: 'inherit',
  textDecoration: 'none',
})
