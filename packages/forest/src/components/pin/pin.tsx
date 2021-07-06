import styled from '@emotion/styled'
import {
  Box,
  BoxProps,
  Grid,
  GridProps,
  Text,
  TextProps,
  HStack,
  HStackProps,
} from '../../primitives'

const PinMediaSelector = styled(Box)()

const Variant = {
  vertical: {
    gridTemplate: `
      "media"
      "title"
      "note"
      "tags"
      "actions"
    `,
    [`${PinMediaSelector}`]: {
      paddingBottom: 's.12',
    },
  },
  horizontal: {
    gridTemplate: `
      "media title"
      "media note"
      "media tags"
      "media actions" auto / auto minmax(40%, 100%)
    `,
    [`${PinMediaSelector}`]: {
      paddingRight: 's.16',
      $md: { paddingRight: 's.28' },
    },
  },
} as const

export interface PinProps<E extends string>
  extends Omit<GridProps<E>, 'ref' | 'variant'> {
  variant?: keyof typeof Variant
}

export const Pin = <E extends string>({
  variant: key = 'horizontal',
  ...rest
}: PinProps<E>) => <Grid as="article" pss={Variant[key]} {...rest} />

export interface PinMediaProps extends Omit<BoxProps, 'ref'> {}

export const PinMedia = (props: PinMediaProps) => (
  <PinMediaSelector
    pss={{
      gridArea: 'media',
      height: '100%',
    }}
    {...props}
  />
)

export interface PinTitleProps extends Omit<TextProps, 'ref'> {}

export const PinTitle = (props: PinTitleProps) => (
  <Text
    as="div"
    variant="h3"
    pss={{
      gridArea: 'title',
      marginBottom: 's.12',
    }}
    {...props}
  />
)

export interface PinNoteProps extends Omit<TextProps, 'ref'> {}

export const PinNote = (props: PinNoteProps) => (
  <Text
    as="section"
    variant="primary"
    pss={{
      gridArea: 'note',
      color: 'grey.50',
      marginBottom: 's.16',
    }}
    {...props}
  />
)

export interface PinTagsProps extends Omit<HStackProps, 'ref'> {}

export const PinTags = ({ children, ...rest }: PinTagsProps) => (
  <HStack
    space="s.12"
    pss={{ gridArea: 'tags', flexWrap: 'wrap', marginBottom: 's.8' }}
    {...rest}
  >
    {children}
  </HStack>
)

export interface PinActionsProps extends Omit<HStackProps, 'ref'> {}

export const PinActions = ({ children, ...rest }: PinActionsProps) => (
  <HStack
    space="s.12"
    pss={{ gridArea: 'actions', flexWrap: 'wrap' }}
    {...rest}
  >
    {children}
  </HStack>
)
