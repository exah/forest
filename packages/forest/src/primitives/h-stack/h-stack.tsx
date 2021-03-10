import styled from '@emotion/styled'
import { Stack, StackComponent, StackProps } from '../stack'

export interface HStackProps<E extends string = 'div'> extends StackProps<E> {}

/** @private */
export interface HStackComponent<E extends string = 'div'>
  extends StackComponent<E> {}

export const HStack: HStackComponent = styled<any>(Stack)`
  flex-direction: row;

  > :not(:last-child) {
    margin-inline-end: var(--stack-space);
  }
`

HStack.displayName = 'HStack'
