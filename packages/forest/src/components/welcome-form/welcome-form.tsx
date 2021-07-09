import { rem } from 'pss'
import { VStack, Text } from '../../primitives'
import { Form, FormProps } from '../form'

export interface WelcomeFormProps extends FormProps {}

export const WelcomeForm = ({ children, $$, ...rest }: WelcomeFormProps) => (
  <Form $$={{ maxWidth: rem(450), ...$$ }} {...rest}>
    <VStack space="s.24" p="s.32">
      {children}
    </VStack>
  </Form>
)

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
