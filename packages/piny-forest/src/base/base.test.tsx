import { render, screen } from '@testing-library/react'
import { Base } from './base'

test('get correct element inside a "ref"', () => {
  const ref = jest.fn()

  render(<Base ref={(element) => ref(element)}>Base</Base>)

  expect(screen.getByText('Base')).toBeInTheDocument()
  expect(ref.mock.calls[0][0]).toBeInstanceOf(HTMLDivElement)
})

test('change element with "as" prop', () => {
  const ref = jest.fn()

  render(<Base as="button" ref={(element) => ref(element)} />)

  expect(ref.mock.calls[0][0]).toBeInstanceOf(HTMLButtonElement)
})
