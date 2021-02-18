import styled from '@emotion/styled'
import { pss, PSS, spaceStyle, SpaceStyleProps, style, StyleProps } from 'pss'
import { Base, BaseComponent, BaseProps } from '../base'

export interface BoxProps<E extends string = 'div', V extends string = 'boxes'>
  extends Omit<BaseProps<E, V>, keyof BoxInnerProps>,
    BoxInnerProps {}

export interface BoxInnerProps
  extends PSS,
    SpaceStyleProps<'margin', 'm'>,
    SpaceStyleProps<'padding', 'p'>,
    StyleProps<'size', 's'>,
    StyleProps<'width', 'w'>,
    StyleProps<'height', 'h'>,
    StyleProps<'color', 'fg'>,
    StyleProps<'backgroundColor', 'bg'> {}

/** @private */
export interface BoxComponent<
  E extends string = 'div',
  V extends string = 'boxes',
  Props extends {} = {}
> extends BaseComponent<E, V, BoxInnerProps & Props> {}

export const Box: BoxComponent = styled<any>(Base)(
  pss,
  ...spaceStyle('margin', 'm'),
  ...spaceStyle('padding', 'p'),
  style('size', 's'),
  style('width', 'w'),
  style('height', 'h'),
  style('color', 'fg'),
  style('backgroundColor', 'bg')
)

Box.defaultProps = {
  as: 'div',
  __key: 'boxes',
}
