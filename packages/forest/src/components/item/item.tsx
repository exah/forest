import { Button, ButtonProps, Grid, Text } from '../../primitives'

export interface ItemProps<E extends keyof React.ReactHTML = 'button'>
  extends Omit<ButtonProps<E, 'items'>, 'ref'> {
  icon: React.ComponentType
  accent?: string
}

export const Item = <E extends keyof React.ReactHTML = 'button'>({
  icon: Icon,
  children,
  ...rest
}: ItemProps<E>) => (
  <Button {...rest} __key="items">
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
      <Text pss={{ gridArea: 'icon' }}>
        <Icon />
      </Text>
      <Text variant="primary" pss={{ gridArea: 'label' }}>
        {children}
      </Text>
    </Grid>
  </Button>
)
