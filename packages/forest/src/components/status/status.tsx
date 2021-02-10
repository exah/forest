import { Text, TextProps } from '../../primitives'

export interface StatusProps<E extends keyof React.ReactHTML = 'span'>
  extends Omit<TextProps<E>, 'ref'> {
  accent?: string
}

export function Status<E extends keyof React.ReactHTML>({
  variant = 'secondary',
  accent = 'grey.80',
  ...rest
}: StatusProps<E>) {
  return <Text variant={variant} fg="grey.50" {...rest} />
}
