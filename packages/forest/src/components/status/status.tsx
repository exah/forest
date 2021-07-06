import { Text, TextProps } from '../../primitives'

export interface StatusProps<E extends string>
  extends Omit<TextProps<E>, 'ref'> {}

export const Status = <E extends string = 'span'>({
  children,
  ...rest
}: StatusProps<E>) => (
  <Text variant="secondary" fg="grey.50" {...rest}>
    {children}
  </Text>
)
