import { forwardRef } from 'react'
import { Box, BoxProps } from '../../primitives'

export interface FormProps extends BoxProps<'form'> {}

export const Form = forwardRef<HTMLFormElement, FormProps>(
  ({ $$, ...rest }, ref) => (
    <Box
      as="form"
      ref={ref}
      $$={{
        color: 'fg',
        backgroundColor: 'shadow.bg.48',
        boxShadow: '48.black.8',
        borderRadius: 'form.md',
        width: 'stretch',
        ...$$,
      }}
      {...rest}
    />
  )
)
