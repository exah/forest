import styled from '@emotion/styled'
import * as ThemeKey from '../../constants/theme-key'
import { ThemeVariantProp } from '../../constants/theme-variant-prop'
import { Box, BoxComponent, BoxProps } from '../box'
import { style, StyleProps } from '../../utils'

export interface GridProps<E extends keyof React.ReactHTML = 'div'>
  extends Omit<BoxProps<E>, 'rows' | 'columns'>,
    GridInnerProps {}

export interface GridInnerProps
  extends StyleProps<'gap'>,
    StyleProps<'gridTemplate', 'template'>,
    StyleProps<'gridTemplateColumns', 'columns'>,
    StyleProps<'gridTemplateRows', 'rows'>,
    StyleProps<'placeItems'>,
    StyleProps<'placeContent'> {}

function autoTemplate<S>(input: S) {
  return typeof input === 'number' ? `repeat(${input}, 1fr)` : input
}

/** @private */
export interface GridComponent<E extends keyof React.ReactHTML = 'div'>
  extends BoxComponent<E, GridInnerProps> {}

export const Grid: GridComponent = styled(Box)<GridInnerProps>(
  { display: 'grid' },
  style('gap'),
  style('rowGap'),
  style('columnGap'),
  style('gridTemplate', 'template'),
  style('gridTemplateColumns', 'columns', autoTemplate),
  style('gridTemplateRows', 'rows', autoTemplate),
  style('placeItems'),
  style('placeContent')
)

Grid.defaultProps = {
  as: 'div',
  [ThemeVariantProp]: ThemeKey.GRID_VARIANTS,
}
