import { screen } from '@testing-library/react'

import { render } from 'tests/renderer'

import Nav from './Nav'

describe('Nav', () => {
  it('has all the links', () => {
    render(<Nav />)

    const transferLink = screen.getAllByText(
      /Transfer/i
    )[1] as HTMLAnchorElement
    expect(transferLink.href).toContain('/')

    const redeemLink = screen.getAllByText(/Redeem/i)[0] as HTMLAnchorElement
    expect(redeemLink.href).toContain('/redeem')

    const transactionsLink = screen.getAllByText(
      /Transactions/i
    )[0] as HTMLAnchorElement
    expect(transactionsLink.href).toContain('/transactions')
  })
})
