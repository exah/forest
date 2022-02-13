import { useRef, useState } from 'react'
import { FocusableElement } from '../../types'
import {
  useDocument,
  useScrollLock,
  useUniversalLayoutEffect,
} from '../../hooks'
import { focusTrapOnTab, focusOnFirst, noop, isFocusable } from '../../utils'
import { ZStackProps, ZStack } from '../../primitives'
import { Portal, PortalProps } from '../portal'
import { Overlay } from '../overlay'

export interface DialogProps
  extends Omit<ZStackProps<'div', 'modals'>, 'ref' | 'as'>,
    Pick<PortalProps, 'getContainer' | 'onCleanup'> {
  open?: boolean
  zIndex?: number
  scrollLock?: boolean
  onRequestClose?: () => void
}

export function Dialog({
  open: isOpen = false,
  children,
  getContainer,
  onCleanup,
  zIndex,
  scrollLock: hasScrollLock = true,
  onRequestClose = noop,
  ...rest
}: DialogProps) {
  const doc = useDocument()
  const lastFocusedRef = useRef<FocusableElement | null>(null)
  const [dialogEl, setDialogEl] = useState<HTMLDivElement | null>(null)

  useScrollLock(isOpen && hasScrollLock)
  useUniversalLayoutEffect(() => {
    if (!doc) return

    if (isOpen) {
      if (!dialogEl) return
      focusOnFirst(dialogEl)
      return () => lastFocusedRef.current?.focus()
    } else {
      return () => {
        if (isFocusable(doc.activeElement))
          lastFocusedRef.current = doc.activeElement
      }
    }
  }, [doc, isOpen, dialogEl, lastFocusedRef])

  return (
    isOpen && (
      <Portal getContainer={getContainer} onCleanup={onCleanup}>
        <ZStack
          ref={setDialogEl}
          role="dialog"
          aria-modal
          onKeyDown={(event) => {
            switch (event.key) {
              case 'Escape':
                return onRequestClose()
              case 'Tab':
                return focusTrapOnTab(event)
            }
          }}
          {...rest}
          $key="modals"
          $$={{ zIndex }}
        >
          <Overlay onClick={onRequestClose} />
          {children}
        </ZStack>
      </Portal>
    )
  )
}
