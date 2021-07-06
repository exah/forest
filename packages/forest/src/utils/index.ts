type View = Window & typeof globalThis

export function noop() {}

export function getView(
  input?: HTMLDocument | HTMLElement | null
): View | null {
  if (input == null) return null
  if ('body' in input) return input.defaultView

  return getView(input.ownerDocument)
}

const SCROLL_REGEX = /(auto|scroll|overlay)/

export function hasScroll(view: View, input: HTMLElement) {
  const style = view.getComputedStyle(input)
  return SCROLL_REGEX.test(style.overflowX + style.overflowY)
}

export function getScrollEventTarget(input: HTMLElement) {
  return input === input.ownerDocument.documentElement
    ? input.ownerDocument
    : input
}

export function getScrollingElement(
  doc?: HTMLDocument | null
): HTMLElement | null {
  const view = getView(doc)

  if (view == null || doc == null) return null
  if (hasScroll(view, doc.body)) return doc.body

  return doc.scrollingElement instanceof view.HTMLElement
    ? doc.scrollingElement
    : doc.documentElement
}

let locks: number = 0
export function scrollLock(element: HTMLElement) {
  if (locks === 0) element.style.overflow = 'hidden'
  locks = locks + 1

  return () => {
    locks = locks - 1
    if (locks === 0) element.style.overflow = ''
  }
}

export function isFocused(element: HTMLElement) {
  return element.ownerDocument.activeElement === element
}

export function focusTrapOnTab(event: React.KeyboardEvent) {
  const focusable = event.currentTarget.querySelectorAll<HTMLElement>(
    `:enabled, :any-link, [tabIndex]:not([tabIndex="-1"])`
  )

  if (focusable.length > 0) {
    const first = focusable[0]
    const last = focusable[focusable.length - 1]

    if (event.shiftKey) {
      if (isFocused(first)) {
        last.focus()
        event.preventDefault()
      }
    } else {
      if (isFocused(last)) {
        first.focus()
        event.preventDefault()
      }
    }
  }
}
