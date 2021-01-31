import styled from '@emotion/styled'
import { ThemeKey, Variant } from '../constants'
import { Text, TextProps } from '../text'

export interface ListProps<E extends keyof React.ReactHTML = 'ul'>
  extends TextProps<E>,
    ListInnerProps {}

export interface ListInnerProps {}

export const List = styled(Text)<ListInnerProps>({
  listStyle: 'none',
})

List.defaultProps = {
  as: 'ul',
  [ThemeKey]: Variant.LIST,
}

export interface ListItemProps<E extends keyof React.ReactHTML = 'li'>
  extends TextProps<E>,
    ListItemInnerProps {}

export interface ListItemInnerProps {}

export const ListItem = styled(Text)<ListItemInnerProps>()

ListItem.defaultProps = {
  as: 'li',
}
