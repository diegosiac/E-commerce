import React from 'react'
import { act, render, screen } from '@testing-library/react'
import { ExecutePaymentPage } from '../../../src/checkout/pages/ExecutePaymentPage'
import { MemoryRouter, Navigate } from 'react-router-dom'
import { STATUSDELIVERY, formaterValue, getCheckoutOrder, getDayTranform } from '../../../src/helpers'
import { orderFixtures } from '../../fixtures/orderFixtures'

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  Navigate: jest.fn()
}))

jest.mock('../../../src/helpers/getCheckoutOrder')

describe('Testing on <ExecutePaymentPage/>', () => {
  beforeEach(() => jest.clearAllMocks())
  afterEach(() => jest.clearAllMocks())

  test('if there is no query param "id" it should redirect to "/"', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <ExecutePaymentPage />
      </MemoryRouter>
    )

    expect(Navigate).toHaveBeenCalledWith({ replace: true, to: '/' }, {})
  })

  test('If you do not find the order, you must redirect to the "/" route', async () => {
    getCheckoutOrder.mockResolvedValue(undefined)

    await act(async () => {
      render(
        <MemoryRouter initialEntries={['/?id=23f2y230h98']}>
          <ExecutePaymentPage />
        </MemoryRouter>
      )
    })

    expect(Navigate).toHaveBeenCalledWith({ replace: true, to: '/' }, {})
  })

  test('must find the order and show the information', async () => {
    getCheckoutOrder.mockResolvedValue(orderFixtures)

    await act(async () => {
      render(
        <MemoryRouter initialEntries={['/?id=23f2y230h98']}>
          <ExecutePaymentPage />
        </MemoryRouter>
      )
    })

    const { address, amount, id, dateShop, products, delivery } = orderFixtures

    const amountFix = formaterValue(amount)

    const dateShopDay = getDayTranform(dateShop)
    const dateDeliveryDay = getDayTranform(delivery.date)

    const isCompleteDelivery = delivery.status === STATUSDELIVERY.COMPLETE ? 'Entregado el' : 'Se entrega el'

    products.forEach(({ name }) => {
      expect(screen.queryByText((content) => content.includes(name))).toBeTruthy()
    })

    expect(screen.queryByText((content) => content.includes(dateShopDay))).toBeTruthy()
    expect(screen.queryByText((content) => content.includes(dateDeliveryDay))).toBeTruthy()
    expect(screen.queryByText((content) => content.includes(isCompleteDelivery))).toBeTruthy()

    expect(screen.queryByText((content) => content.includes(id))).toBeTruthy()
    expect(screen.queryAllByText((content) => content.includes(amountFix))).toBeTruthy()

    expect(screen.getByText(address.address1)).toBeTruthy()
    expect(screen.getByText(`${address.countryRegion}, ${address.zip}, ${address.state}`)).toBeTruthy()
    expect(screen.getByText(`${address.firstName} ${address.lastName}`)).toBeTruthy()
    expect(screen.getByText(address.locality)).toBeTruthy()
    expect(screen.getByText(address.phoneNumber)).toBeTruthy()
    expect(screen.getByText(address.sublocality)).toBeTruthy()
  })

  test('The component must be in a loading state when the information is being consulted', () => {
    const setCountSpy = jest.spyOn(React, 'useState')
    setCountSpy.mockImplementation((initialState) => [initialState, jest.fn()])

    render(
      <MemoryRouter initialEntries={['/?id=23f2y230h98']}>
        <ExecutePaymentPage />
      </MemoryRouter>
    )

    expect(screen.getByTestId('SkeletonCheckout')).toBeTruthy()
  })
})
