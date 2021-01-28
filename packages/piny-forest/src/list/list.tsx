import styled from '@emotion/styled'
import { ThemeKey, Variant } from '../constants'
import { Text } from '../text'

export interface ListProps {}

export const List = styled(Text)<ListProps>({
  listStyle: 'none',
})

List.defaultProps = {
  as: 'ul',
  [ThemeKey]: Variant.LIST,
}

export interface ListItemProps {}

export const ListItem = styled(Text)<ListItemProps>()

ListItem.defaultProps = {
  as: 'li',
}
