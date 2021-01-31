import isPropValid from '@emotion/is-prop-valid'
import { forwardRef } from 'react'
import { isObject } from '../utils'

type Cast<X, Y> = X extends Y ? X : Y

type ElementType<
  E extends keyof React.ReactHTML
> = React.ReactHTML[E] extends React.DetailedHTMLFactory<any, infer T>
  ? Cast<T, Element>
  : any

export interface BaseProps<E extends keyof React.ReactHTML>
  extends Omit<React.AllHTMLAttributes<ElementType<E>>, 'as'> {
  as?: E | React.ComponentType
  ref?: React.Ref<ElementType<E>>
}

export interface Base<E extends keyof React.ReactHTML>
  extends React.ForwardRefExoticComponent<Omit<BaseProps<E>, 'as'>> {
  <T extends keyof React.ReactHTML = E>(
    props: BaseProps<T>
  ): React.ReactElement | null
}

function omit<E extends keyof React.ReactHTML>(props: BaseProps<E>) {
  return Object.fromEntries(
    Object.entries(props).filter(
      ([key, value]) => isPropValid(key) && !isObject(value)
    )
  )
}

export const Base: Base<'div'> = forwardRef(
  ({ as: Comp = 'div', children, ...rest }, ref) => (
    <Comp ref={ref} {...omit(rest)}>
      {children}
    </Comp>
  )
)