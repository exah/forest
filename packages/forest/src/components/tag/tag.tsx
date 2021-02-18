import { Link, LinkProps, Text } from '../../primitives'

export interface TagProps<E extends string> extends Omit<LinkProps<E>, 'ref'> {}

export const Tag = <E extends string = 'a'>({
  children,
  ...rest
}: TagProps<E>) => (
  <Link {...rest}>
    <Text variant="secondary">{children}</Text>
  </Link>
)
