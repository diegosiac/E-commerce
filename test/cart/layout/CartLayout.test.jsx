import { render, screen } from '@testing-library/react'
import { CartLayout } from '../../../src/cart/layout/CartLayout'

describe('Testing on <CartLayout/>', () => {
  test('should ', () => {
    const titleExpect = 'test title'
    const childrenExpect = 'test children'

    const tree = render(
      <CartLayout title='test title'>
        {childrenExpect}
      </CartLayout>
    )

    expect(screen.getByText(titleExpect)).toBeTruthy()
    expect(screen.getByText(childrenExpect)).toBeTruthy()
    expect(tree).toMatchSnapshot()
  })
})
