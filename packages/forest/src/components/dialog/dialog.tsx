import { useState } from 'react'
import { useScrollLock, useUniversalLayoutEffect } from '../../hooks'
import { focusTrapOnTab, focusOnFirst, noop } from '../../utils'
import { Box, ZStackProps, ZStack } from '../../primitives'
import { Portal, PortalProps } from '../portal'

export interface DialogProps
  extends ZStackProps,
    Pick<PortalProps, 'getContainer'> {
  open?: boolean
  zIndex?: number
  scrollLock?: boolean
  onRequestClose?: () => void
}

export function Dialog({
  open: isOpen = false,
  children,
  getContainer,
  zIndex,
  scrollLock: hasScrollLock = true,
  onRequestClose = noop,
  ...rest
}: DialogProps) {
  const [dialogEl, setDialogEl] = useState<HTMLElement | null>(null)

  useScrollLock(isOpen && hasScrollLock)
  useUniversalLayoutEffect(() => {
    if (dialogEl) focusOnFirst(dialogEl)
  }, [dialogEl])

  return (
    isOpen && (
      <Portal getContainer={getContainer}>
        <ZStack
          ref={setDialogEl}
          role="dialog"
          aria-modal
          $$={{
            position: 'fixed',
            size: '100%',
            top: 0,
            left: 0,
            zIndex,
            overflow: 'auto',
          }}
          onKeyDown={(event) => {
            switch (event.key) {
              case 'Escape':
                return onRequestClose()
              case 'Tab':
                return focusTrapOnTab(event)
            }
          }}
          {...rest}
        >
          <Box bg="overlay" onClick={onRequestClose} />
          {children}
        </ZStack>
      </Portal>
    )
  )
}
