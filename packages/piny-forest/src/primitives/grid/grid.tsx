import { style, StyleProps } from 'pss'
import styled from '@emotion/styled'
import * as ThemeKey from '../../constants/theme-key'
import { ThemeVariantProp } from '../../constants/theme-variant-prop'
import { Box, BoxComponent, BoxProps } from '../box'

export interface GridProps<
  E extends keyof React.ReactHTML = 'div',
  V extends string = ThemeKey.GRID_VARIANTS
> extends Omit<BoxProps<E, V>, keyof GridInnerProps>,
    GridInnerProps {}

export interface GridInnerProps
  extends StyleProps<'gap'>,
    StyleProps<'gridTemplate', 'template'>,
    StyleProps<'gridTemplateColumns', 'columns'>,
    StyleProps<'gridTemplateRows', 'rows'>,
    StyleProps<'placeItems'>,
    StyleProps<'placeContent'> {}

/** @private */
export interface GridComponent<
  E extends keyof React.ReactHTML = 'div',
  V extends string = ThemeKey.GRID_VARIANTS
> extends BoxComponent<E, V, GridInnerProps> {}

export const Grid: GridComponent = styled(Box)<GridInnerProps>(
  { display: 'grid' },
  style('gap'),
  style('rowGap'),
  style('columnGap'),
  style('gridTemplate', 'template'),
  style('gridTemplateColumns', 'columns'),
  style('gridTemplateRows', 'rows'),
  style('placeItems'),
  style('placeContent')
)

Grid.defaultProps = {
  as: 'div',
  [ThemeVariantProp]: ThemeKey.GRID_VARIANTS,
}
