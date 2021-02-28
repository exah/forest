import styled from '@emotion/styled'
import { style, StyleProps } from 'pss'

import { Grid, GridComponent, GridProps } from '../grid'

export interface ZStackProps<
  E extends string = 'div',
  V extends string = 'zStacks'
> extends Omit<GridProps<E, V>, keyof ZStackInnerProps>,
    ZStackInnerProps {}

/** @private */
export interface ZStackInnerProps extends StyleProps<'placeItems'> {}

/** @private */
export interface ZStackComponent<
  E extends string = 'div',
  V extends string = 'zStacks'
> extends GridComponent<E, V, ZStackInnerProps> {}

export const ZStack: ZStackComponent = styled<any>(Grid)(
  { gridTemplateAreas: '"z-stack-item"', '> *': { gridArea: 'z-stack-item' } },
  style('placeItems')
)

ZStack.defaultProps = {
  as: 'div',
  __key: 'zStacks',
}
