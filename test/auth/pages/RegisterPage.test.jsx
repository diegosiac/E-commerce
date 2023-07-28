import { act, fireEvent, render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { useAuthStore } from '../../../src/hooks'
import { RegisterPage } from '../../../src/auth/pages/RegisterPage'

const mockClearMessage = jest.fn()
const mockStartRegister = jest.fn()

jest.mock('../../../src/hooks/useAuthStore')

jest.mock('../../../src/store/auth/thunks', () => ({
  clearMessage: () => mockClearMessage,
  startRegister: (data) => () => mockStartRegister(data)
}))

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useDispatch: () => (fn) => fn()
}))

useAuthStore.mockReturnValue({ status: 'not-autenticated', errorMessage: null })

describe('Testing on <RegisterPage/>', () => {
  beforeEach(() => jest.clearAllMocks())

  test('when disassembling the component you must call "clearMessage"', () => {
    const { unmount } = render(
      <MemoryRouter initialEntries={['/']}>
        <RegisterPage />
      </MemoryRouter>
    )

    unmount()

    expect(mockClearMessage).toHaveBeenCalled()
  })

  test('It should show the error messages if you click on "Crear Cuenta" and the form has not been filled out', async () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <RegisterPage />
      </MemoryRouter>
    )

    const submitButton = screen.getByRole('button', { name: 'Crear Cuenta' })

    await act(async () => {
      fireEvent.click(submitButton)
    })

    expect(screen.getByText('El nombre es requerido')).toBeTruthy()
    expect(screen.getByText('El correo es requerido')).toBeTruthy()
    expect(screen.getByText('La contraseña es requerida')).toBeTruthy()
    expect(mockStartRegister).not.toHaveBeenCalled()
  })

  test('You must submit the form with the data and display an error message', async () => {
    const messageExpect = 'El correo no es válido'
    const expectValues = {
      name: 'userTest',
      email: 'test@test.com',
      password: '123456'
    }

    useAuthStore.mockReturnValue({ status: 'not-autenticated', errorMessage: messageExpect })

    render(
      <MemoryRouter initialEntries={['/']}>
        <RegisterPage />
      </MemoryRouter>
    )

    const submitButton = screen.getByRole('button', { name: 'Crear Cuenta' })

    const nameInput = screen.getByRole('textbox', { name: 'Nombre completo' })
    const emailInput = screen.getByRole('textbox', { name: 'Correo' })
    const passwordInput = screen.getByLabelText('Contraseña')

    await act(async () => {
      fireEvent.change(nameInput, { target: { value: expectValues.name } })
      fireEvent.change(emailInput, { target: { value: expectValues.email } })
      fireEvent.change(passwordInput, { target: { value: expectValues.password } })
      fireEvent.click(submitButton)
    })

    expect(screen.getByText(messageExpect)).toBeTruthy()
    expect(mockStartRegister).toHaveBeenCalledWith(expectValues)
  })

  test('You must send the form with the data and do not show any error messages', async () => {
    const expectValues = {
      name: 'userTest',
      email: 'test@test.com',
      password: '123456'
    }

    render(
      <MemoryRouter initialEntries={['/']}>
        <RegisterPage />
      </MemoryRouter>
    )

    const submitButton = screen.getByRole('button', { name: 'Crear Cuenta' })

    const nameInput = screen.getByRole('textbox', { name: 'Nombre completo' })
    const emailInput = screen.getByRole('textbox', { name: 'Correo' })
    const passwordInput = screen.getByLabelText('Contraseña')

    await act(async () => {
      fireEvent.change(nameInput, { target: { value: expectValues.name } })
      fireEvent.change(emailInput, { target: { value: expectValues.email } })
      fireEvent.change(passwordInput, { target: { value: expectValues.password } })
      fireEvent.click(submitButton)
    })

    expect(mockStartRegister).toHaveBeenCalledWith(expectValues)
  })
})
