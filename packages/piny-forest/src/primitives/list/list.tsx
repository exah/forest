import styled from '@emotion/styled'
import * as ThemeKey from '../../constants/theme-key'
import { ThemeVariantProp } from '../../constants/theme-variant-prop'
import { Text, TextComponent, TextProps } from '../text'

export interface ListProps<E extends keyof React.ReactHTML = 'ul'>
  extends TextProps<E>,
    ListInnerProps {}

export interface ListInnerProps {}

/** @private */
export interface ListComponent<E extends keyof React.ReactHTML = 'ul'>
  extends TextComponent<E, ListInnerProps> {}

export const List: ListComponent = styled(Text)<ListInnerProps>({
  listStyle: 'none',
})

List.defaultProps = {
  as: 'ul',
  [ThemeVariantProp]: ThemeKey.LIST_VARIANTS,
}

export interface ListItemProps<E extends keyof React.ReactHTML = 'li'>
  extends TextProps<E>,
    ListItemInnerProps {}

export interface ListItemInnerProps {}

/** @private */
export interface ListItemComponent<E extends keyof React.ReactHTML = 'li'>
  extends TextComponent<E, ListItemInnerProps> {}

export const ListItem: ListItemComponent = styled(Text)<ListItemInnerProps>()

ListItem.defaultProps = {
  as: 'li',
}
