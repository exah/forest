import { Button, ButtonProps } from '../../primitives'

export interface ActionProps<E extends string = 'button'>
  extends Omit<ButtonProps<E, 'actions'>, 'ref'> {}

export const Action = <E extends string = 'button'>(props: ActionProps<E>) => (
  <Button $key="actions" {...props} />
)
