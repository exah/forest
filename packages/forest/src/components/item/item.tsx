import { Button, ButtonProps, Grid, Text } from '../../primitives'

export interface ItemProps extends Omit<ButtonProps<'button'>, 'ref'> {
  icon: React.ReactElement
  accent?: string
}

export const Item = ({
  icon,
  children,
  accent = 'accent',
  pss,
  ...rest
}: ItemProps) => (
  <Button
    pss={{
      color: 'grey.90',
      transition: 'text',
      ':hover': {
        color: accent,
      },
      ...pss,
    }}
    {...rest}
  >
    <Grid
      as="span"
      pss={{
        gridTemplate: `
          "icon label" auto / 1.25rem 1fr
        `,
        columnGap: 's.8',
        alignItems: 'center',
        svg: { display: 'block' },
      }}
    >
      <Text pss={{ gridArea: 'icon' }}>{icon}</Text>
      <Text variant="primary" pss={{ gridArea: 'label' }}>
        {children}
      </Text>
    </Grid>
  </Button>
)
