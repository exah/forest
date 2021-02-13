import styled from '@emotion/styled'
import {
  pss,
  PSS,
  spaceStyle,
  SpaceStyleProps,
  style,
  StyleProps,
  variant,
  VariantProps,
} from 'pss'
import { Base, BaseComponent, BaseProps } from '../base'

interface VariantKeyProps {
  '@pss/variant'?: string
}

function key({ '@pss/variant': key }: VariantKeyProps) {
  return key ? variant(key, 'default') : null
}

export interface BoxProps<
  E extends keyof React.ReactHTML = 'div',
  V extends string = 'boxVariants'
> extends Omit<BaseProps<E>, keyof BoxInnerProps>,
    BoxInnerProps<V> {}

export interface BoxInnerProps<V extends string = 'boxVariants'>
  extends VariantKeyProps,
    VariantProps<V>,
    PSS,
    SpaceStyleProps<'margin', 'm'>,
    SpaceStyleProps<'padding', 'p'>,
    StyleProps<'size', 's'>,
    StyleProps<'width', 'w'>,
    StyleProps<'height', 'h'>,
    StyleProps<'color', 'fg'>,
    StyleProps<'backgroundColor', 'bg'> {}

/** @private */
export interface BoxComponent<
  E extends keyof React.ReactHTML = 'div',
  V extends string = 'boxVariants',
  Props extends {} = {}
> extends BaseComponent<E, BoxInnerProps<V> & Props> {}

export const Box: BoxComponent = styled<any>(Base)(
  {
    boxSizing: 'border-box',
    '&::before, &::after': { boxSizing: 'inherit' },
  },
  key,
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
  '@pss/variant': 'boxVariants',
}
