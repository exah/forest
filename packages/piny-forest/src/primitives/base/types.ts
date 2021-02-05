export type Cast<A, B> = A extends B ? A : B

export type ElementType<
  E extends keyof React.ReactHTML
> = React.ReactHTML[E] extends React.DetailedHTMLFactory<any, infer T>
  ? Cast<T, Element>
  : any
