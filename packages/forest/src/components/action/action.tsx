import { Button, ButtonProps, Text, TextProps } from '../../primitives'

export interface ActionProps
  extends Omit<ButtonProps, 'variant'>,
    Pick<TextProps, 'variant'> {
  accent?: string
}

export const Action = ({
  variant = 'secondary',
  accent = 'grey.80',
  children,
  ...rest
}: ActionProps) => (
  <Button
    pss={{
      color: 'grey.50',
      transition: 'text',
      ':hover': { color: accent },
    }}
    {...rest}
  >
    <Text variant={variant}>{children}</Text>
  </Button>
)
