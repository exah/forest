import styled, { ComponentSelector } from '@emotion/styled'
import { variant, VariantProps } from 'pss'
import { ElementType } from './types'

interface VariantKeyProps<V> {
  /** @private */
  __key?: V
}

function key({ __key: key }: VariantKeyProps<string>) {
  return key ? variant(key, 'default') : null
}

export interface HTMLProps<E extends keyof React.ReactHTML>
  extends Omit<React.AllHTMLAttributes<ElementType<E>>, 'as' | 'ref'> {}

export interface BaseProps<E extends keyof React.ReactHTML, V extends string>
  extends HTMLProps<E>,
    BaseInnerProps<E>,
    VariantKeyProps<V>,
    VariantProps<V> {}

export interface BaseInnerProps<E extends keyof React.ReactHTML> {
  as?: E | React.ComponentType
  ref?: React.Ref<ElementType<E>>
}

/** @private */
export interface BaseComponent<
  Element extends keyof React.ReactHTML = 'div',
  Variant extends string = 'bases',
  Props extends {} = {}
> extends React.VFC<BaseProps<keyof React.ReactHTML, Variant> & Props>,
    ComponentSelector {
  <T extends keyof React.ReactHTML = Element, V extends string = Variant>(
    props: BaseProps<T, V> & Props
  ): React.ReactElement | null
}

export const Base: BaseComponent = styled<any>('div')(
  {
    boxSizing: 'border-box',
    '&::before, &::after': { boxSizing: 'inherit' },
    appearance: 'none',
    margin: 0,
    padding: 0,
    border: 0,
    minWidth: 0,
    borderRadius: 0,
    background: 'none',
    font: 'inherit',
    color: 'inherit',
    textAlign: 'inherit',
    textDecoration: 'none',
  },
  key
)
