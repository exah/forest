import { Link, LinkProps, Text } from '../../primitives'

export interface TagProps<E extends keyof React.ReactHTML>
  extends Omit<LinkProps<E>, 'ref'> {}

export const Tag = <E extends keyof React.ReactHTML = 'a'>({
  children,
  ...rest
}: TagProps<E>) => (
  <Link {...rest}>
    <Text variant="secondary">{children}</Text>
  </Link>
)
