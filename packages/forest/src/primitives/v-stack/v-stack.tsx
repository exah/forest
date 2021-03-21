import styled from '@emotion/styled'
import { Stack, StackComponent, StackProps } from '../stack'

export interface VStackProps<E extends string = 'div'> extends StackProps<E> {}

/** @private */
export interface VStackComponent<E extends string = 'div'>
  extends StackComponent<E> {}

export const VStack: VStackComponent = styled<any>(Stack)(
  { flexDirection: 'column' },
  (props) =>
    props.space != null && {
      '> :not(:last-child)': {
        marginBlockEnd: 'var(--stack-space)',
      },
    }
)

VStack.displayName = 'VStack'
