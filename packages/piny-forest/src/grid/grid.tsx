import styled from '@emotion/styled'
import { Box, BoxProps } from '../box'
import { style, StyleProps } from '../utils'

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

export const Grid = styled(Box)<GridInnerProps>(
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