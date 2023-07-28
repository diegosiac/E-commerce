import { act, fireEvent, render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { LoginPage } from '../../../src/auth/pages/LoginPage'
import { useAuthStore } from '../../../src/hooks'

const mockClearMessage = jest.fn()
const mockStartLogin = jest.fn()

jest.mock('../../../src/hooks/useAuthStore')

jest.mock('../../../src/store/auth/thunks', () => ({
  clearMessage: () => mockClearMessage,
  startLogin: (data) => () => mockStartLogin(data)
}))

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useDispatch: () => (fn) => fn()
}))

useAuthStore.mockReturnValue({ status: 'not-autenticated', errorMessage: null })

describe('Testing on <LoginPage/>', () => {
  beforeEach(() => jest.clearAllMocks())

  test('when disassembling the component you must call "clearMessage"', () => {
    const { unmount } = render(
      <MemoryRouter initialEntries={['/']}>
        <LoginPage />
      </MemoryRouter>
    )

    unmount()

    expect(mockClearMessage).toHaveBeenCalled()
  })

  test('It should show the error messages if you click on "Iniciar Sesión" and the form has not been filled out', async () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <LoginPage />
      </MemoryRouter>
    )

    const submitButton = screen.getByRole('button', { name: 'Iniciar Sesión' })

    await act(async () => {
      fireEvent.click(submitButton)
    })

    expect(screen.getByText('El correo es requerido')).toBeTruthy()
    expect(screen.getByText('La contraseña es requerida')).toBeTruthy()
    expect(mockStartLogin).not.toHaveBeenCalled()
  })

  test('You must submit the form with the data and display an error message', async () => {
    const messageExpect = 'El correo no es válido'
    const expectValues = {
      email: 'test@test.com',
      password: '123456'
    }

    useAuthStore.mockReturnValue({ status: 'not-autenticated', errorMessage: messageExpect })

    render(
      <MemoryRouter initialEntries={['/']}>
        <LoginPage />
      </MemoryRouter>
    )

    const submitButton = screen.getByRole('button', { name: 'Iniciar Sesión' })
    const inputEmailElement = screen.getByRole('textbox', { name: 'Correo' })
    const passwordInput = screen.getByLabelText('Contraseña')

    await act(async () => {
      fireEvent.change(inputEmailElement, { target: { value: expectValues.email } })
      fireEvent.change(passwordInput, { target: { value: expectValues.password } })
      fireEvent.click(submitButton)
    })

    expect(screen.getByText(messageExpect)).toBeTruthy()
    expect(mockStartLogin).toHaveBeenCalledWith(expectValues)
  })

  test('You must send the form with the data and do not show any error messages', async () => {
    const expectValues = {
      email: 'test@test.com',
      password: '123456'
    }

    render(
      <MemoryRouter initialEntries={['/']}>
        <LoginPage />
      </MemoryRouter>
    )

    const submitButton = screen.getByRole('button', { name: 'Iniciar Sesión' })
    const inputEmailElement = screen.getByRole('textbox', { name: 'Correo' })
    const passwordInput = screen.getByLabelText('Contraseña')

    await act(async () => {
      fireEvent.change(inputEmailElement, { target: { value: expectValues.email } })
      fireEvent.change(passwordInput, { target: { value: expectValues.password } })
      fireEvent.click(submitButton)
    })

    expect(mockStartLogin).toHaveBeenCalledWith(expectValues)
  })
})
