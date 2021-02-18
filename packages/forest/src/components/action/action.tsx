import { Button, ButtonProps, Text, TextProps } from '../../primitives'

export interface ActionProps<E extends string = 'button'>
  extends Omit<ButtonProps<E>, 'variant' | 'ref'>,
    Pick<TextProps, 'variant'> {
  accent?: string
}

export const Action = <E extends string = 'button'>({
  variant = 'secondary',
  accent = 'grey.80',
  children,
  pss,
  ...rest
}: ActionProps<E>) => (
  <Button
    pss={{
      color: 'grey.50',
      transition: 'text',
      ':hover': { color: accent },
      ...pss,
    }}
    {...rest}
  >
    <Text variant={variant}>{children}</Text>
  </Button>
)
