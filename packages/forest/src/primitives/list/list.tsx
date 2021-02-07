import styled from '@emotion/styled'
import { LIST_VARIANTS, TEXT_VARIANTS } from '../../constants/theme-key'
import { VARIANT_PROP } from '../../constants/variant-prop'
import { Text, TextComponent, TextProps } from '../text'

export interface ListProps<
  E extends keyof React.ReactHTML = 'ul',
  V extends string = LIST_VARIANTS
> extends TextProps<E, V>,
    ListInnerProps {}

export interface ListInnerProps {}

/** @private */
export interface ListComponent<
  E extends keyof React.ReactHTML = 'ul',
  V extends string = LIST_VARIANTS
> extends TextComponent<E, V, ListInnerProps> {}

export const List: ListComponent = styled(Text)<ListInnerProps>()

List.defaultProps = {
  as: 'ul',
  [VARIANT_PROP]: LIST_VARIANTS,
}

export interface ListItemProps<
  E extends keyof React.ReactHTML = 'li',
  V extends string = TEXT_VARIANTS
> extends TextProps<E, V>,
    ListItemInnerProps {}

export interface ListItemInnerProps {}

/** @private */
export interface ListItemComponent<
  E extends keyof React.ReactHTML = 'li',
  V extends string = TEXT_VARIANTS
> extends TextComponent<E, V, ListItemInnerProps> {}

export const ListItem: ListItemComponent = styled(Text)<ListItemInnerProps>()

ListItem.defaultProps = {
  as: 'li',
  [VARIANT_PROP]: TEXT_VARIANTS,
}
