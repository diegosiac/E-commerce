import { act, fireEvent, render, screen, waitFor } from '@testing-library/react'
import { AddressForm } from '../../../src/checkout/components'
import { getLocation } from '../../../src/helpers'

const initialValues = {
  firstName: '',
  lastName: '',
  address1: '',
  phoneNumber: '',
  countryRegion: '',
  zip: '',
  state: '',
  locality: '',
  sublocality: ''
}

jest.useFakeTimers()

jest.mock('../../../src/helpers/getLocation')

describe('Testing on <AddressForm/>', () => {
  beforeEach(() => jest.clearAllMocks())

  test('should display an error message and not submit the form', () => {
    const handleNext = jest.fn()
    const setData = jest.fn()

    render(<AddressForm addressData={initialValues} handleNext={handleNext} setData={setData} />)

    const btnSubmit = screen.getByRole('button', { name: 'Siguiente Paso' })
    fireEvent.click(btnSubmit)

    expect(handleNext).not.toHaveBeenCalled()
    expect(setData).not.toHaveBeenCalled()
    expect(screen.getByText('Complete todos los campos para continuar')).toBeTruthy()
  })

  test('You must send the form and send the data', async () => {
    const handleNext = jest.fn()
    const setData = jest.fn()
    const initialAddress = {
      ...initialValues,
      countryRegion: 'Mexico'
    }

    const address = {
      countryRegion: 'Mexico',
      zip: '06500',
      state: 'Ciudad de México',
      firstName: 'test',
      lastName: 'demo',
      address1: 'Av. P.º de la Reforma 373-Piso 20',
      sublocality: 'Avenida Paseo de la Reforma',
      locality: 'Cuauhtémoc',
      phoneNumber: '5552742932'
    }

    getLocation.mockResolvedValue({ zip: 'valid' })

    render(<AddressForm addressData={initialAddress} handleNext={handleNext} setData={setData} />)

    const textbox = screen.getAllByRole('textbox')
    const combobox = screen.getByRole('combobox')

    await act(async () => {
      fireEvent.blur(combobox)

      textbox.forEach(inputField => {
        const fieldName = inputField.getAttribute('name')

        fireEvent.blur(inputField)
        fireEvent.change(inputField, { target: { value: address[fieldName] } })
      })

      jest.advanceTimersByTime(1300)
    })

    const btnSubmit = screen.getByRole('button', { name: 'Siguiente Paso' })

    await act(async () => {
      fireEvent.click(btnSubmit)
    })

    await waitFor(() => {
      expect(handleNext).toHaveBeenCalled()
      expect(setData).toHaveBeenCalledWith(address)
    })
  })

  test('You must perform the validation of the zip', async () => {
    const handleNext = jest.fn()
    const setData = jest.fn()

    const zip = '53822'

    getLocation.mockResolvedValue({ zip: 'valid' })

    const valuesAddress = {
      ...initialValues,
      countryRegion: 'Mexico'
    }

    render(<AddressForm addressData={valuesAddress} handleNext={handleNext} setData={setData} />)

    const inputField = screen.getByRole('combobox')
    const inputZip = screen.getByRole('textbox', { name: 'Código postal' })

    await act(async () => {
      fireEvent.blur(inputField)
      fireEvent.change(inputZip, { target: { value: zip } })

      jest.advanceTimersByTime(1300)
    })

    await waitFor(() => {
      expect(getLocation).toHaveBeenCalledWith({ country: valuesAddress.countryRegion, zip })
      expect(screen.queryByText('Código postal inválido')).toBeNull()
    })
  })

  test('It must perform the validation of the zip and show an error message in case it is invalid', async () => {
    const handleNext = jest.fn()
    const setData = jest.fn()

    const zip = '62226'

    getLocation.mockResolvedValue(undefined)

    const valuesAddress = {
      ...initialValues,
      countryRegion: 'Mexico'
    }

    render(<AddressForm addressData={valuesAddress} handleNext={handleNext} setData={setData} />)

    const inputField = screen.getByRole('combobox')
    const inputZip = screen.getByRole('textbox', { name: 'Código postal' })

    await act(async () => {
      fireEvent.blur(inputField)
      fireEvent.blur(inputZip)
      fireEvent.change(inputZip, { target: { value: zip } })

      jest.advanceTimersByTime(1300)
    })

    await waitFor(() => {
      expect(getLocation).toHaveBeenCalledWith({ country: valuesAddress.countryRegion, zip })
      expect(screen.getByText('Código postal inválido')).toBeTruthy()
    })
  })
})
