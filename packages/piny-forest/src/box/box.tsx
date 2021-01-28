import styled from '@emotion/styled'
import { ThemeKey, Variant } from '../constants'
import { Reset } from '../reset'
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

export interface BoxProps
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
    StyleProps<'color'>,
    StyleProps<'backgroundColor', 'bg'>,
    StyleProps<'gridArea'>,
    StyleProps<'placeSelf'>,
    StyleProps<'flex'>,
    StyleProps<'order'> {}

export const Box = styled(Reset)<BoxProps>(
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
  style('color'),
  style('backgroundColor', 'bg'),
  style('gridArea'),
  style('placeSelf'),
  style('flex'),
  style('order')
)

Box.defaultProps = {
  [ThemeKey]: Variant.BOX,
}
