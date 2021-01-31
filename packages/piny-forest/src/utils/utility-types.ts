export type Modify<A, B> = Omit<A, keyof B> & B
export type Cast<A, B> = A extends B ? A : B

export type ElementType<
  E extends keyof React.ReactHTML
> = React.ReactHTML[E] extends React.DetailedHTMLFactory<any, infer T>
  ? Cast<T, Element>
  : any

export type Get<Path, Input> = Path extends `${infer Key}.${infer Rest}`
  ? Key extends keyof Input
    ? Get<Rest, Input[Key]>
    : undefined
  : Path extends keyof Input
  ? Input[Path]
  : undefined
