import { render, screen } from '@testing-library/react'
import { PurchasesLayout } from '../../../src/purchases/layout/PurchasesLayout'

const titleTest = 'a test title'
const childrenTest = 'a test children'

describe('Testing on <PurchasesLayout/>', () => {
  test('should render the component correctly', () => {
    render(
      <PurchasesLayout title={titleTest}>
        {childrenTest}
      </PurchasesLayout>
    )

    expect(screen.getByText(titleTest)).toBeTruthy()

    expect(screen.getByText(childrenTest)).toBeTruthy()
  })

  test('must match with the Snapshot', () => {
    const tree = render(
      <PurchasesLayout title={titleTest}>
        {childrenTest}
      </PurchasesLayout>
    )

    expect(tree).toMatchSnapshot()
  })
})
