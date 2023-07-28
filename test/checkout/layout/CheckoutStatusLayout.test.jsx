import { render, screen } from '@testing-library/react'
import { CheckoutStatusLayout } from '../../../src/checkout/layout/CheckoutStatusLayout'

describe('Testing on <CheckoutStatusLayout/>', () => {
  test('shouldshould render the component correctly and must match with the Snapshot ', () => {
    const childrenExpect = 'demo data'
    const titleExpect = 'Title Test'

    const tree = render(
      <CheckoutStatusLayout title={titleExpect}>
        {childrenExpect}
      </CheckoutStatusLayout>
    )

    expect(screen.getByText(childrenExpect)).toBeTruthy()
    expect(screen.getByText(titleExpect)).toBeTruthy()

    expect(tree).toMatchSnapshot()
  })
})
