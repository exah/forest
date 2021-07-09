import { useRef, useEffect } from 'react'
import {
  ElementType,
  Input,
  InputProps,
  Text,
  TextProps,
  ZStack,
} from '../../primitives'

interface FieldHelperProps extends Omit<TextProps, 'ref'> {}

function FieldHelper(props: FieldHelperProps) {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    if (ref.current) {
      const element = ref.current.previousElementSibling
      const rect = ref.current.getBoundingClientRect()

      if (element instanceof HTMLElement) {
        element.style.setProperty('--field-helper-width', `${rect.width}px`)
      }
    }
  }, [ref, props.children])

  return (
    <Text
      ref={ref}
      variant="secondary"
      $$={{
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        maxWidth: '50%',
        paddingLeft: 's.12',
        paddingRight: 's.20',
        placeSelf: 'center end',
        textAlign: 'right',
        opacity: 0,
        pointerEvents: 'none',
        '*:not(:focus) + &': {
          opacity: 1,
          pointerEvents: 'auto',
        },
      }}
      {...props}
    />
  )
}

export interface FieldProps<E extends string>
  extends Omit<InputProps<E, 'inputs'>, 'ref'> {
  label: string
  validityMessage?: string
  helper?: React.ReactNode
}

export function Field<E extends 'input' | 'select' | 'textarea' = 'input'>({
  label,
  helper,
  validityMessage,
  ...rest
}: FieldProps<E>) {
  const ref = useRef<ElementType<E>>(null)

  useEffect(() => {
    const input = ref.current

    if (input && validityMessage) {
      input.setCustomValidity(validityMessage)
      return () => input.setCustomValidity('')
    }
  }, [validityMessage])

  return (
    <ZStack as="label" aria-label={label} title={label}>
      <Input
        ref={ref}
        $$={{
          ':not(:focus)': {
            paddingRight: 'min(var(--field-helper-width), 50%)',
          },
        }}
        {...rest}
      />
      {validityMessage ? (
        <FieldHelper fg="red">{validityMessage}</FieldHelper>
      ) : helper ? (
        <FieldHelper>{helper}</FieldHelper>
      ) : null}
    </ZStack>
  )
}
