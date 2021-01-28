import { render, screen } from '@testing-library/react'
import { Reset } from './reset'

test('using correct default styles', () => {
  render(<Reset>Reset</Reset>)

  expect(screen.getByText('Reset')).toHaveStyle({
    margin: 0,
    padding: 0,
    border: 0,
    borderRadius: 0,
    background: 'none',
    font: 'inherit',
    color: 'inherit',
    textAlign: 'inherit',
    textDecoration: 'none',
  })
})

test('using correct default styles for a link', () => {
  render(
    <Reset as="a" href="https://google.com">
      Reset
    </Reset>
  )

  expect(screen.getByText('Reset')).toHaveStyle({
    textDecoration: 'none',
  })
})
