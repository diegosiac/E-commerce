
describe('Complete path-to-purchase testing', () => {
  let userDetails

  let addressData

  before(() => {
    cy.fixture('user').then((data) => {
      userDetails = data
    })

    cy.fixture('address').then((data) => {
      addressData = data
    })
  })

  it('Proof of purchase', () => {
    cy.visit('/')

    cy.get('img[alt="Geek Mobile Repair"]').as('homeImg')

    cy.get('@homeImg').should('be.visible')

    cy.get('a[aria-label="Iniciar sesión"]').click()

    cy.contains('Iniciar sesión').should('be.visible')

    cy.get('input[name="email"]').type(userDetails.email)

    cy.get('input[name="password"]').as('inputPassword')

    cy.get('@inputPassword').type(userDetails.password)

    cy.get('@inputPassword').should('have.attr', 'type', 'password')

    cy.get('button[aria-label="Contraseña Visible"]').click()

    cy.get('@inputPassword').should('have.attr', 'type', 'text')

    cy.get('button[aria-label="Iniciar Sesión"]').click()

    cy.get('@homeImg').should('be.visible')

    cy.get('[data-testid="Iniciar sesión navbar"] > span').should('include.text', userDetails.name)

    cy.get('div[data-testid="cardProduct"]').eq(0).click()

    cy.get('button[aria-label="AGREGAR AL CARRITO"]').as('addCart')

    cy.get('@addCart').click()

    cy.get('a[aria-label="Volver"]').as('returnHome')

    cy.get('@returnHome').click()

    cy.get('div[data-testid="cardProduct"]').eq(4).click()
    cy.get('@addCart').click()

    cy.get('@returnHome').click()

    cy.get('div[data-testid="cardProduct"]').eq(2).click()
    cy.get('@addCart').click()

    cy.initShop(addressData)

    cy.get('[data-testid="navbar-Inicio"]').click()

    cy.get('@homeImg').should('be.visible')

    cy.get('a[aria-label="Ir a su perfil"]').click()

    cy.verifyPurchase(userDetails, addressData)

    cy.get('img[alt="Geek Mobile Repair Logo"]').click()

    cy.get('@homeImg').should('be.visible')
  })

  describe('Proof of purchase on mobile screen', () => {
    const newUser = {
      name: 'Demo king',
      email: 'demoking@outlook.com',
      password: 'Demoonking117'
    }

    after(() => {
      cy.deleteAccont(newUser.email)
    })

    it('Proof of purchase ', () => {
      cy.visit('/')
      cy.viewport(550, 750)

      cy.get('img[alt="Geek Mobile Repair"]').as('homeImg')

      cy.get('@homeImg').should('be.visible')

      cy.get('button[aria-label="Menú de usuario"]').as('menuResponsive')

      cy.get('@menuResponsive').click()

      cy.get('a[aria-label="Registrarse"]').should('be.visible').click()

      cy.get('h1').should('have.text', 'Crear cuenta')

      cy.get('input[name="name"]').type(newUser.name)
      cy.get('input[name="email"]').type(newUser.email)
      cy.get('input[name="password"]').type(newUser.password)

      cy.get('button[aria-label="Contraseña Visible"]').click()

      cy.get('button[aria-label="Crear Cuenta"]').click()

      cy.get('@menuResponsive').click()

      cy.get('span[data-testid="MenuUserName"]').contains(newUser.name).should('be.visible')

      cy.get('a[data-testid="menu-Inicio"]').click()

      cy.get('@homeImg').should('be.visible')

      cy.get('input[aria-label="Ingresa lo que quieras encontrar"]').as('inputSearch')

      cy.get('@inputSearch').type('Flex lector')

      cy.get('[id=":r9:-option-0"]').click()

      cy.get('button[aria-label="AGREGAR AL CARRITO"]').as('addCart')

      cy.get('@addCart').click()

      cy.get('@inputSearch').clear()
      cy.get('@inputSearch').type('samsumg')
      cy.get('button[aria-label="Buscar"]').click()

      cy.get('div[data-testid="cardProduct"]').first().click()
      cy.get('@addCart').click()

      cy.get('@inputSearch').clear()
      cy.get('@inputSearch').type('reparacion')
      cy.get('[id=":r9:-option-0"]').click()
      cy.get('@addCart').click()

      cy.initShop(addressData)

      cy.get('@menuResponsive').click()

      cy.get('[data-testid="SettingsIcon"]').click()

      cy.verifyPurchase(newUser, addressData)

      cy.get('@menuResponsive').click()

      cy.get('a[data-testid="menu-Inicio"]').click()

      cy.get('@homeImg').should('be.visible')
    })
  })
})
