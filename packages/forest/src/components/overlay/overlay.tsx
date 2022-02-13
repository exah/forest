import { Box, BoxProps } from '../../primitives'

export interface OverlayProps extends BoxProps {}

export const Overlay = (props: OverlayProps) => <Box bg="overlay" {...props} />
