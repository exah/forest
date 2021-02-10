import { Link, LinkProps, Text } from '../../primitives'

export interface TagProps extends Omit<LinkProps, 'ref'> {}

export const Tag = ({ children, ...rest }: TagProps) => (
  <Link {...rest}>
    <Text variant="secondary">{children}</Text>
  </Link>
)
