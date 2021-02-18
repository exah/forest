import styled from '@emotion/styled'
import { Text, TextComponent, TextProps } from '../text'

export interface ListProps<
  E extends keyof React.ReactHTML = 'ul',
  V extends string = 'lists'
> extends TextProps<E, V>,
    ListInnerProps {}

export interface ListInnerProps {}

/** @private */
export interface ListComponent<
  E extends keyof React.ReactHTML = 'ul',
  V extends string = 'lists'
> extends TextComponent<E, V, ListInnerProps> {}

export const List: ListComponent = styled<any>(Text)()

List.defaultProps = {
  as: 'ul',
  __key: 'lists',
}

export interface ListItemProps<
  E extends keyof React.ReactHTML = 'li',
  V extends string = 'listItems'
> extends TextProps<E, V>,
    ListItemInnerProps {}

export interface ListItemInnerProps {}

/** @private */
export interface ListItemComponent<
  E extends keyof React.ReactHTML = 'li',
  V extends string = 'listItems'
> extends TextComponent<E, V, ListItemInnerProps> {}

export const ListItem: ListItemComponent = styled<any>(
  Text
)<ListItemInnerProps>()

ListItem.defaultProps = {
  as: 'li',
  __key: 'listItems',
}
