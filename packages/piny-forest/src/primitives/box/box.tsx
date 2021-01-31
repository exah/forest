import styled from '@emotion/styled'
import * as ThemeKey from '../../constants/theme-key'
import { ThemeVariantProp } from '../../constants/theme-variant-prop'
import { Base, BaseComponent, BaseProps } from '../base'
import {
  pss,
  PSS,
  spaceStyle,
  SpaceStyleProps,
  style,
  StyleProps,
  variant,
  VariantProps,
} from '../../utils'

interface VariantKeyProps {
  [ThemeVariantProp]?: string
}

function key({ [ThemeVariantProp]: key }: VariantKeyProps) {
  return key ? variant(key) : null
}

export interface BoxProps<E extends keyof React.ReactHTML = 'div'>
  extends Omit<BaseProps<E>, keyof BoxInnerProps>,
    BoxInnerProps {}

export interface BoxInnerProps
  extends VariantKeyProps,
    VariantProps<string>,
    PSS,
    SpaceStyleProps<'margin', 'm'>,
    SpaceStyleProps<'padding', 'p'>,
    StyleProps<'size'>,
    StyleProps<'width'>,
    StyleProps<'maxWidth'>,
    StyleProps<'minWidth'>,
    StyleProps<'height'>,
    StyleProps<'minHeight'>,
    StyleProps<'maxHeight'>,
    StyleProps<'color', 'fg'>,
    StyleProps<'backgroundColor', 'bg'>,
    StyleProps<'gridArea'>,
    StyleProps<'placeSelf'>,
    StyleProps<'flex'>,
    StyleProps<'order'> {}

/** @private */
export interface BoxComponent<
  E extends keyof React.ReactHTML = 'div',
  Props extends {} = {}
> extends BaseComponent<E, BoxInnerProps & Props> {}

export const Box: BoxComponent = styled(Base)<BoxInnerProps>(
  {
    boxSizing: 'border-box',
    '&::before, &::after': { boxSizing: 'inherit' },
  },
  key,
  pss,
  ...spaceStyle('margin', 'm'),
  ...spaceStyle('padding', 'p'),
  style('size'),
  style('width'),
  style('maxWidth'),
  style('minWidth'),
  style('height'),
  style('minHeight'),
  style('maxHeight'),
  style('color', 'fg'),
  style('backgroundColor', 'bg'),
  style('gridArea'),
  style('placeSelf'),
  style('flex'),
  style('order')
)

Box.defaultProps = {
  as: 'div',
  [ThemeVariantProp]: ThemeKey.BOX_VARIANTS,
}
