import { Box, BoxProps } from '../../primitives'

export interface GroupProps extends BoxProps {}

export const Group = (props: GroupProps) => (
  <Box as="section" mb="s.28" {...props} />
)
