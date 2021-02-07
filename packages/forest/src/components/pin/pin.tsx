import styled from '@emotion/styled'
import {
  Box,
  BoxProps,
  Grid,
  GridProps,
  Text,
  TextProps,
  HStack,
} from '../../primitives'

const VARIANT = {
  vertical: 'v-pin',
  horizontal: 'h-pin',
} as const

interface PinProps extends Omit<GridProps, 'ref' | 'variant'> {
  variant: keyof typeof VARIANT
}

interface PinMediaProps extends Omit<BoxProps, 'ref'> {}
interface PinTitleProps extends Omit<TextProps, 'ref'> {}
interface PinNoteProps extends Omit<TextProps, 'ref'> {}
interface PinTagsProps extends Omit<TextProps, 'ref'> {}
interface PinActionsProps extends Omit<TextProps, 'ref'> {}

const PinMediaBox = styled(Box)()

export const Pin = ({ variant = 'horizontal', ...rest }: PinProps) => (
  <Grid
    as="article"
    variant={VARIANT[variant]}
    pss={{
      [`${PinMediaBox}`]:
        variant === 'horizontal' ? { paddingRight: 7 } : { paddingBottom: 3 },
    }}
    {...rest}
  />
)

export const PinMedia = ({ className, ...rest }: PinMediaProps) => (
  <PinMediaBox
    pss={{
      gridArea: 'media',
      height: '100%',
    }}
    {...rest}
  />
)

export const PinTitle = (props: PinTitleProps) => (
  <Text
    as="h3"
    variant="h3"
    pss={{
      gridArea: 'title',
      marginBottom: 3,
    }}
    {...props}
  />
)

export const PinNote = (props: PinNoteProps) => (
  <Text
    as="section"
    variant="primary"
    pss={{
      gridArea: 'note',
      display: '-webkit-box',
      WebkitBoxOrient: 'vertical',
      WebkitLineClamp: 3,
      color: 'grey.500',
      overflow: 'hidden',
      marginBottom: 4,
    }}
    {...props}
  />
)

export const PinTags = ({ children, ...rest }: PinTagsProps) => (
  <Text
    as="div"
    variant="secondary"
    pss={{
      gridArea: 'tags',
      marginBottom: 2,
    }}
    {...rest}
  >
    <HStack as="div" gap={2}>
      {children}
    </HStack>
  </Text>
)

export const PinActions = ({ children, ...rest }: PinActionsProps) => (
  <Text
    as="div"
    variant="secondary"
    fg="grey.500"
    pss={{
      gridArea: 'actions',
    }}
    {...rest}
  >
    <HStack as="div" gap={2}>
      {children}
    </HStack>
  </Text>
)
