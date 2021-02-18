import { Box, BoxProps, Text, TextProps } from '../../primitives'

export interface StatusProps<E extends string>
  extends Omit<BoxProps<E>, 'ref' | 'variant'>,
    Pick<TextProps, 'variant'> {}

export const Status = <E extends string = 'span'>({
  variant = 'secondary',
  children,
  ...rest
}: StatusProps<E>) => (
  <Box as="span" {...rest}>
    <Text variant={variant} fg="grey.50">
      {children}
    </Text>
  </Box>
)
