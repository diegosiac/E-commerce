import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import { Review } from '../../../src/checkout/components/Review'
import { basketFixtures } from '../../fixtures/basketFixtures'
import { orderFixtures } from '../../fixtures/orderFixtures'
import { setCheckout } from '../../../src/helpers'
import { MemoryRouter } from 'react-router-dom'

const { address } = orderFixtures

jest.mock('../../../src/helpers/setCheckout')

describe('Testing on <Review/>', () => {
  beforeEach(() => jest.clearAllMocks())

  test('must show the purchase information such as the products and the shipping address', () => {
    const handleBack = jest.fn()

    render(
      <Review
        addressData={address}
        basket={basketFixtures}
        handleBack={handleBack}
      />
    )

    basketFixtures.forEach(({ name }) => {
      expect(screen.queryByText((content) => content.includes(name))).toBeTruthy()
    })
    const completeAddress = `${address.address1}, ${address.sublocality}, ${address.locality}, ${address.state}, ${address.zip}, ${address.countryRegion}`

    expect(screen.getByText(completeAddress)).toBeTruthy()
    expect(screen.getByText(`${address.firstName} ${address.lastName}`)).toBeTruthy()
  })

  test('You must click on the button to go back', () => {
    const handleBack = jest.fn()

    render(
      <Review
        addressData={address}
        basket={basketFixtures}
        handleBack={handleBack}
      />
    )

    const btnBack = screen.getByLabelText('Volver Atras')
    fireEvent.click(btnBack)

    expect(handleBack).toHaveBeenCalled()
  })

  test('when you click to go to pay you must change the page', async () => {
    const url = 'www.paypal.com/checkPay?id=92jf039'
    const handleBack = jest.fn()
    const assignMock = jest.fn()

    delete window.location
    window.location = { assign: assignMock }

    setCheckout.mockResolvedValue({ link: { href: url } })

    render(
      <MemoryRouter>
        <Review
          addressData={address}
          basket={basketFixtures}
          handleBack={handleBack}
        />
      </MemoryRouter>
    )

    const btnPay = screen.getByLabelText('Pagar Con Paypal')
    fireEvent.click(btnPay)

    await waitFor(() => {
      expect(assignMock).toHaveBeenCalledWith(url)
    })
  })
})
