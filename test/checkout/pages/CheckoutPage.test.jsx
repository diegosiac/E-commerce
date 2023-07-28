import { fireEvent, render, screen } from '@testing-library/react'
import { CheckoutPage } from '../../../src/checkout/pages/CheckoutPage'
import { useCartStore } from '../../../src/hooks'
import { basketFixtures } from '../../fixtures/basketFixtures'

jest.mock('../../../src/hooks/useCartStore')

jest.mock('../../../src/checkout/components/AddressForm', () => ({
  AddressForm: ({ handleNext }) => <>AddressForm <button onClick={handleNext} /></>
}))

jest.mock('../../../src/checkout/components/Review', () => ({
  Review: ({ handleBack }) => <>Review <button onClick={handleBack} /></>
}))

describe('Testing on <CheckoutPage/>', () => {
  beforeEach(() => jest.clearAllMocks())

  test('should display the component "AddressForm" when the component is rendered', () => {
    useCartStore.mockReturnValue({ basket: basketFixtures })

    render(<CheckoutPage />)

    expect(screen.getByText('AddressForm')).toBeTruthy()
  })

  test('You must click to advance to the next page', () => {
    useCartStore.mockReturnValue({ basket: basketFixtures })

    render(<CheckoutPage />)

    const btn = screen.getByRole('button')
    fireEvent.click(btn)

    expect(screen.getByText('Review')).toBeTruthy()
  })

  test('You must click to advance to the next page and return to the previous page', () => {
    useCartStore.mockReturnValue({ basket: basketFixtures })

    render(<CheckoutPage />)

    const btn = screen.getByRole('button')
    fireEvent.click(btn)

    expect(screen.getByText('Review')).toBeTruthy()

    const btnAddress = screen.getByRole('button')
    fireEvent.click(btnAddress)

    expect(screen.getByText('AddressForm')).toBeTruthy()
  })
})
