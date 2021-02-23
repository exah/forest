import { Button, ButtonProps } from '../../primitives'
import { PlusIcon } from '../icons'

export interface AddButtonProps extends ButtonProps {}

export const AddButton = (props: AddButtonProps) => (
  <Button variant="round" {...props}>
    <PlusIcon />
  </Button>
)
