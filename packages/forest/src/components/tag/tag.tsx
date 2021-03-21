import { forwardRef } from 'react'
import { Link, LinkProps, Text } from '../../primitives'

export interface TagProps<E extends string = 'a'> extends LinkProps<E> {}

interface TagComponent extends React.ForwardRefRenderFunction<TagProps> {
  <E extends string = 'a'>(props: TagProps<E>): React.ReactElement | null
}

export const Tag = forwardRef<HTMLAnchorElement, TagProps>(
  ({ children, ...rest }, ref) => (
    <Link ref={ref} {...rest}>
      <Text variant="secondary">{children}</Text>
    </Link>
  )
) as TagComponent
