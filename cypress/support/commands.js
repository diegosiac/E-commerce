Cypress.Commands.add('deleteAccont', (email) => {
  cy.request({
    method: 'POST',
    url: `${Cypress.env('API_URL')}/admin/auth`,
    headers: {
      Authorization: Cypress.env('SECRET_AUTH_ADMIN')
    },
    body: {
      email: Cypress.env('EMAIL_ADMIN'),
      password: Cypress.env('PASSWORD_ADMIN')
    }
  }).then(({ body }) => {
    cy.request({
      method: 'DELETE',
      url: `${Cypress.env('API_URL')}/admin/delete/user`,
      form: true,
      headers: {
        Authorization: body.user.token
      },
      body: {
        email
      }
    })
  })
})

Cypress.Commands.add('initShop', (addressData) => {
  cy.get('a[aria-label="Ir al carrito de compras"]').click()

  cy.get('button[aria-label="Eliminar"]').eq(0).click()

  cy.get('section[data-testid="ItemProduct"]').as('products')

  cy.get('@products').eq(0).find('#Product-quantity').contains('1')
  cy.get('@products').eq(0).find('button[arial-label="Agregar una unidad"]').click()
  cy.get('@products').eq(0).find('#Product-quantity').contains('2')

  cy.get('@products').eq(1).find('#Product-quantity').contains('1')
  cy.get('@products').eq(1).find('button[arial-label="Agregar una unidad"]').click()
  cy.get('@products').eq(1).find('#Product-quantity').contains('2')

  cy.get('@products').eq(0).find('button[arial-label="Quitar una unidad"]').click()
  cy.get('@products').eq(0).find('#Product-quantity').contains('1')

  cy.get('a[aria-label="Continuar compra"]').click()

  cy.get('#firstName').type(addressData.name)
  cy.get('#lastName').type(addressData.lastName)
  cy.get('#address1').type(addressData.addressLine)
  cy.get('#phoneNumber').type(addressData.phoneNumber)
  cy.get('#state').type(addressData.state)
  cy.get('#locality').type(addressData.locality)
  cy.get('#sublocality').type(addressData.sublocality)

  cy.get('input[name="countryRegion"]').type(addressData.country)
  cy.get('[data-testid="regionlist"]').contains(addressData.country).click()

  cy.get('#zip').type(addressData.zip)

  cy.wait(1200)

  cy.intercept('GET', `${Cypress.env('API_URL_MAPS')}?components=country:${addressData.country}%7Cpostal_code:${addressData.zip}&key=${Cypress.env('API_KEY_MAPS')}`).as('apiRequest')

  cy.wait('@apiRequest')

  cy.get('p').should('not.contain', 'Código postal inválido')

  cy.get('button[aria-label="Siguiente Paso"]').click()

  cy.get('h1').should('contain', 'Proceso de pago')

  cy.get('button[aria-label="Pagar Con Paypal"]').click()

  cy.origin(Cypress.env('PAYPAL_URL'), () => {
    cy.get('#email').type(Cypress.env('PAYPAL_EMAIL'))
    cy.get('#btnNext').click()
    cy.get('#password').type(Cypress.env('PAYPAL_PASSWORD'))

    cy.get('#btnLogin').click()
    cy.get('#payment-submit-btn').click()
  })

  cy.get('h2').contains('Gracias por tu compra').should('be.visible')

  cy.get('h5[data-testid="purchaseId"] > span')
    .invoke('text')
    .then((text) => {
      cy.wrap(text).as('purchaseId')
    })

  cy.get('h5').contains('Dirección de envío').should('be.visible')

  cy.contains(addressData.name).should('exist')
  cy.contains(addressData.lastName).should('exist')
  cy.contains(addressData.addressLine).should('exist')
  cy.contains(addressData.country).should('exist')
  cy.contains(addressData.phoneNumber).should('exist')
  cy.contains(addressData.zip).should('exist')
  cy.contains(addressData.locality).should('exist')
  cy.contains(addressData.sublocality).should('exist')
  cy.contains(addressData.state).should('exist')

  cy.get('h3').contains('Artículos Comprados').should('be.visible')

  cy.get('[data-testid="ItemProduct"]').should('have.length.greaterThan', 0)
})

Cypress.Commands.add('verifyPurchase', (userDetails, addressData) => {
  cy.get('[data-testid="CardUserName"]').contains(userDetails.name).should('be.visible')
  cy.get('[data-testid="InfoUserName"]').contains(userDetails.name).should('be.visible')

  cy.contains(userDetails.email).should('be.visible')

  cy.get('a[aria-label="IR A MIS COMPRAS"]').click()

  cy.get('h1').contains('Mis Compras').should('be.visible')

  cy.get('@purchaseId').then((id) => {
    cy.contains(id).should('exist')

    cy.contains(id).siblings('a').click()

    cy.contains(id).should('exist')
  })

  cy.get('ol > li').contains('Detalles del pedido').should('be.visible').and('have.css', 'color', 'rgb(199, 81, 31)')

  cy.get('h1').contains('Detalles de la Compra').should('be.visible')

  cy.get('h5').contains('Dirección de envío').should('be.visible')

  cy.contains(addressData.name).should('exist')
  cy.contains(addressData.lastName).should('exist')
  cy.contains(addressData.addressLine).should('exist')
  cy.contains(addressData.country).should('exist')
  cy.contains(addressData.phoneNumber).should('exist')
  cy.contains(addressData.zip).should('exist')
  cy.contains(addressData.locality).should('exist')
  cy.contains(addressData.sublocality).should('exist')
  cy.contains(addressData.state).should('exist')

  cy.get('[data-testid="ItemProduct"]').should('have.length.greaterThan', 0)
})
