export const userFixtures = {
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
  ]
}
