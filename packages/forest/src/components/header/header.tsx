import { Box, BoxProps, Grid, GridProps, Text } from '../../primitives'
import { Action, ActionProps } from '../action'

export interface HeaderProps<E extends string> extends GridProps<E> {}

export const Header = <E extends string = 'header'>(props: HeaderProps<E>) => (
  <Grid
    as="header"
    mb="s.8"
    gap="s.4"
    template={`
      "title . action" auto / auto 1fr auto
    `}
    {...props}
  />
)

export interface HeaderTitleProps<E extends string> extends BoxProps<E> {}

export const HeaderTitle = <E extends string = 'div'>({
  children,
  ...rest
}: HeaderTitleProps<E>) => (
  <Box as="div" pss={{ color: 'grey.50', gridArea: 'title' }} {...rest}>
    <Text variant="secondary">{children}</Text>
  </Box>
)

export interface HeaderActionProps<E extends string> extends ActionProps<E> {}

export const HeaderAction = <E extends string = 'button'>(
  props: HeaderActionProps<E>
) => (
  <Action
    variant="small"
    pss={{
      gridArea: 'action',
    }}
    {...props}
  />
)
