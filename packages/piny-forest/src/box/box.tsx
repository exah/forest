import styled from '@emotion/styled'
import { ThemeKey, Variant } from '../constants'
import { Reset, ResetProps } from '../reset'
import {
  pss,
  PSS,
  spaceStyle,
  SpaceStyleProps,
  style,
  StyleProps,
  variant,
  VariantProps,
} from '../utils'

interface VariantKeyProps {
  [ThemeKey]?: string
}

function key({ [ThemeKey]: key }: VariantKeyProps) {
  return key ? variant(key) : null
}

export interface BoxProps<E extends keyof React.ReactHTML = 'div'>
  extends Omit<ResetProps<E>, 'width' | 'height' | 'size'>,
    BoxInnerProps {}

export interface BoxInnerProps
  extends VariantKeyProps,
    VariantProps<Variant>,
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

export const Box = styled(Reset)<BoxInnerProps>(
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
  [ThemeKey]: Variant.BOX,
}
