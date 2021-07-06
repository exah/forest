import { rem } from 'pss'
import { VStack, VStackProps, Text } from '../../primitives'

export interface WelcomeFormProps extends VStackProps<'form'> {}

export function WelcomeForm({ pss, ...rest }: WelcomeFormProps) {
  return (
    <VStack
      as="form"
      space="s.24"
      pss={{
        color: 'fg',
        backgroundColor: 'shadow.bg.48',
        boxShadow: '48.black.8',
        padding: 's.32',
        borderRadius: 'form.md',
        maxWidth: rem(450),
        marginX: 'auto',
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
  <VStack space="s.12" align="center">
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
  <VStack space="s.12">{children}</VStack>
)

export interface WelcomeFormActionsProps {
  children?: React.ReactNode
}

export const WelcomeFormActions = ({ children }: WelcomeFormActionsProps) => (
  <VStack space="s.12" align="center">
    {children}
  </VStack>
)
