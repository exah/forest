type View = Window & typeof globalThis

export function noop(): void {}

export function getView(
  input?: HTMLDocument | HTMLElement | null
): View | null {
  if (input == null) return null
  if ('body' in input) return input.defaultView

  return getView(input.ownerDocument)
}

const SCROLL_REGEX = /(auto|scroll|overlay)/

export function hasScroll(view: View, input: HTMLElement): boolean {
  const style = view.getComputedStyle(input)
  return SCROLL_REGEX.test(style.overflowX + style.overflowY)
}

export function getScrollEventTarget(
  input: HTMLElement
): HTMLDocument | HTMLElement {
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

type FocusableElement = HTMLElement | SVGElement

const FOCUSABLE = [
  ':enabled',
  ':any-link',
  ':read-write',
  'iframe',
  '[tabIndex]',
]

export function getFocusable(element: Element): FocusableElement[] {
  const nodeList = element.querySelectorAll<FocusableElement>(`${FOCUSABLE}`)
  return Array.from(nodeList)
}

export function getTabbable(element: Element): FocusableElement[] {
  return getFocusable(element).filter((el) => el.tabIndex > -1)
}

export function isFocused(element: FocusableElement): boolean {
  return element.ownerDocument.activeElement === element
}

export function focusOnFirst(element: Element) {
  const tabbable = getTabbable(element)
  if (tabbable.length === 0 || tabbable.some(isFocused)) return

  tabbable[0].focus()
}

export function focusTrapOnTab(event: React.KeyboardEvent): void {
  const tabbable = getTabbable(event.currentTarget)

  if (tabbable.length > 0) {
    const first = tabbable[0]
    const last = tabbable[tabbable.length - 1]

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
