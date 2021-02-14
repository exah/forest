import { Box, BoxProps, Text } from '../../primitives'

export interface StatusProps extends Omit<BoxProps<'span'>, 'ref'> {}

export const Status = ({
  variant = 'secondary',
  children,
  ...rest
}: StatusProps) => (
  <Box as="span" {...rest}>
    <Text variant={variant} fg="grey.50">
      {children}
    </Text>
  </Box>
)
