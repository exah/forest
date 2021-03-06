import { VStack, VStackProps, Text } from '../../primitives'

export interface WelcomeFormProps extends VStackProps<'form'> {}

export function WelcomeForm({ pss, ...rest }: WelcomeFormProps) {
  return (
    <VStack
      as="form"
      space="s.24"
      pss={{
        color: 'foreground',
        backgroundColor: 'elevated.background',
        padding: 's.32',
        borderRadius: 'form.md',
        boxShadow: 'level.40',
        ...pss,
      }}
      {...rest}
    />
  )
}

export interface WelcomeFormHeaderProps {
  logo: React.ComponentType
  children?: React.ReactNode
}

export const WelcomeFormHeader = ({
  logo: Logo,
  children,
}: WelcomeFormHeaderProps) => (
  <VStack space="s.16" align="center">
    <Logo />
    <Text variant="secondary" textAlign="center" fg="grey.50">
      {children}
    </Text>
  </VStack>
)

export interface WelcomeFormFieldsProps {
  children?: React.ReactNode
}

export const WelcomeFormFields = ({ children }: WelcomeFormFieldsProps) => (
  <VStack space="s.16">{children}</VStack>
)

export interface WelcomeFormActionsProps {
  children?: React.ReactNode
}

export const WelcomeFormActions = ({ children }: WelcomeFormActionsProps) => (
  <VStack space="s.16" align="center">
    {children}
  </VStack>
)
