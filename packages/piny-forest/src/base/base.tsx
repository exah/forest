import styled, { ComponentSelector } from '@emotion/styled'

type Cast<X, Y> = X extends Y ? X : Y

type ElementType<
  E extends keyof React.ReactHTML
> = React.ReactHTML[E] extends React.DetailedHTMLFactory<any, infer T>
  ? Cast<T, Element>
  : any

interface HTMLProps<E extends keyof React.ReactHTML>
  extends Omit<React.AllHTMLAttributes<ElementType<E>>, 'as' | 'ref'> {}

export interface BaseProps<E extends keyof React.ReactHTML>
  extends HTMLProps<E> {
  as?: E | React.ComponentType
  ref?: React.Ref<ElementType<E>>
}

/** @private */
export interface BaseComponent<
  Element extends keyof React.ReactHTML = 'div',
  Props extends {} = {}
> extends React.VFC<BaseProps<keyof React.ReactHTML> & Props>,
    ComponentSelector {
  <T extends keyof React.ReactHTML = Element>(
    props: BaseProps<T> & Props
  ): React.ReactElement | null
}

/** @ts-expect-error */
export const Base: BaseComponent = styled.div({
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
})
