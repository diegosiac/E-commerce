import { STATUS } from '../../src/store/cart/options'
import { basketFixtures } from './basketFixtures'

export const initialState = {
  basket: [],
  pucharses: [],
  status: STATUS.NONE,
  idCheking: null,
  messageError: null
}

export const completeState = {
  basket: basketFixtures,
  pucharses: [
    {
      id: '123f23f23f4',
      products: [
        {
          _id: '1241421',
          name: 'product 1',
          thumbnail: 'www.image.co/img/one',
          value: 124.1,
          amount: 1
        }
      ],
      amount: 124.1,
      dateShop: 'Mon Jul 24 2023',
      delivery: {
        date: 'Mon Jul 29 2023',
        status: 'COMPLETE'
      },
      address: {
        countryRegion: 'Mexico',
        zip: '54234',
        state: 'Estado de mexico',
        firstName: 'Carlos',
        lastName: 'Mora',
        address1: 'calle 25',
        sublocality: 'reforma',
        locality: 'Neza',
        phoneNumber: '5345345345'
      }
    }
  ],
  status: STATUS.NONE,
  idCheking: null,
  messageError: null
}

export const errorMessageState = {
  basket: [],
  pucharses: [],
  status: STATUS.CHECKING,
  idCheking: '29f3h9238hf',
  messageError: 'This error message'
}

export const checkingIdState = {
  basket: basketFixtures,
  pucharses: [
    {
      id: '123f23f23f4',
      products: [
        {
          _id: '1241421',
          name: 'product 1',
          thumbnail: 'www.image.co/img/one',
          value: 124.1,
          amount: 1
        }
      ],
      amount: 124.1,
      dateShop: 'Mon Jul 24 2023',
      delivery: {
        date: 'Mon Jul 29 2023',
        status: 'COMPLETE'
      },
      address: {
        countryRegion: 'Mexico',
        zip: '54234',
        state: 'Estado de mexico',
        firstName: 'Carlos',
        lastName: 'Mora',
        address1: 'calle 25',
        sublocality: 'reforma',
        locality: 'Neza',
        phoneNumber: '5345345345'
      }
    }
  ],
  status: STATUS.CHECKING,
  idCheking: '23f2f23f232',
  messageError: null
}
