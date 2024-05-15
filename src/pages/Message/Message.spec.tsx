import { screen } from '@testing-library/react'

import { render } from 'tests/renderer'

import Message from './Message'

describe('Message', () => {
  it('renders message page', () => {
    render(<Message />)

    expect(
      screen.getByText(/Transfer Message across chains/i)
    ).toBeInTheDocument()
  })
})
