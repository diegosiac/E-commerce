import { render, screen } from '@testing-library/react'
import { AuthLayout } from '../../../src/auth/layout/AuthLayout'
import { MemoryRouter } from 'react-router-dom'

const titleTest = 'title test'
const childrenTest = 'contend test'

describe('Testing on <AuthLayout/>', () => {
  test('should render the component correctly', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <AuthLayout title={titleTest}>
          {childrenTest}
        </AuthLayout>
      </MemoryRouter>
    )

    expect(screen.getByText(titleTest)).toBeTruthy()

    expect(screen.getByText(childrenTest)).toBeTruthy()
  })

  test('must match with the Snapshot', () => {
    const tree = render(
      <MemoryRouter initialEntries={['/']}>
        <AuthLayout title={titleTest}>
          {childrenTest}
        </AuthLayout>
      </MemoryRouter>
    )

    expect(tree).toMatchSnapshot()
  })
})
