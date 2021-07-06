import { useState } from 'react'
import { createPortal } from 'react-dom'
import { useDocument, useUniversalLayoutEffect } from '../../hooks'
import { noop } from '../../utils'

interface GetContainer {
  (doc: HTMLDocument): Element | null
}

interface Cleanup {
  (container: Element): void
}

const getDefaultContainer: GetContainer = (doc) => {
  const container = doc.createElement('div')
  doc.body.appendChild(container)
  return container
}

const handleCleanup: Cleanup = (container) => container.remove()

export interface PortalProps {
  getContainer?: GetContainer
  onCleanup?: Cleanup
  children?: React.ReactNode
}

export function Portal({
  getContainer = getDefaultContainer,
  onCleanup = getContainer === getDefaultContainer ? handleCleanup : noop,
  children,
}: PortalProps) {
  const doc = useDocument()
  const [container, setContainer] = useState<Element | null>(null)

  useUniversalLayoutEffect(() => {
    if (doc) {
      const container = getContainer(doc)

      if (container) {
        setContainer(container)
        return () => onCleanup(container)
      }
    }
  }, [doc, getContainer, onCleanup])

  return container ? createPortal(children, container) : null
}
