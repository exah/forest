import { Box, BoxProps, Text, TextProps } from '../../primitives'

export interface StatusProps
  extends Omit<BoxProps<'span'>, 'ref' | 'variant'>,
    Pick<TextProps, 'variant'> {}

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
