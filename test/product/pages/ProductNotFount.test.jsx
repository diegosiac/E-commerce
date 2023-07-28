import { render } from '@testing-library/react'
import { ProductNotFount } from '../../../src/product/pages'

describe('Testing on <ProductNotFount/>', () => {
  test('must match the snapshot ', () => {
    const tree = render(
      <ProductNotFount />
    )

    expect(tree).toMatchSnapshot()
  })
})
