
describe('Tests on the authentication page', () => {
  let userDetails

  before(() => {
    cy.fixture('user').then((data) => {
      userDetails = data
    })
  })

  describe('Name of the group', () => {
    beforeEach(() => {
      cy.visit('/auth')
    })

    it('should ', () => {
      cy.get('input[name="email"]').as('inputEmail')
      cy.get('input[name="password"]').as('inputPassword')

      cy.get('button[aria-label="Iniciar Sesión"]').click()

      cy.get('p').contains('El correo es requerido').should('be.visible')
      cy.get('p').contains('La contraseña es requerida').should('be.visible')

      cy.get('@inputEmail').type('wnfafp3w')

      cy.get('p').contains('El correo no es válido').should('be.visible')

      cy.get('@inputPassword').type('hfw')

      cy.get('p').contains('Debe tener al menos 6 caracteres').should('be.visible')

      cy.get('@inputEmail').clear()

      cy.get('@inputPassword').clear()

      cy.get('@inputEmail').type('notvalidemail@gmail.com')

      cy.get('@inputPassword').type(userDetails.password)

      cy.get('button[aria-label="Iniciar Sesión"]').click()

      cy.get('div').contains('El correo o la contraseña son incorrectas').should('be.visible')

      cy.get('@inputEmail').clear()

      cy.get('@inputPassword').clear()

      cy.get('@inputEmail').type(userDetails.email)

      cy.get('@inputPassword').type('notvalidPassword')

      cy.get('button[aria-label="Iniciar Sesión"]').click()

      cy.get('div').contains('El correo o la contraseña son incorrectas').should('be.visible')
    })

    it('should ', () => {
      cy.get('input[name="email"]').as('inputEmail')
      cy.get('input[name="password"]').as('inputPassword')

      cy.get('@inputEmail').type(userDetails.email)

      cy.get('@inputPassword').should('have.attr', 'type', 'password')

      cy.get('button[aria-label="Contraseña Visible"]').click()

      cy.get('@inputPassword').type(userDetails.password)

      cy.get('@inputPassword').should('have.attr', 'type', 'text')

      cy.get('button[aria-label="Iniciar Sesión"]').click()

      cy.get('img[alt="Geek Mobile Repair"]').should('be.visible')
    })
  })

  describe('Name of the group', () => {
    const namUser = 'Demon'
    const emailUser = 'demon117@gmail.com'
    const passwordUser = '9f83202f93'

    after(() => {
      cy.deleteAccont(emailUser)
    })

    beforeEach(() => {
      cy.visit('/auth/register')
    })

    it('should ', () => {
      cy.get('input[name="name"]').as('inputName')
      cy.get('input[name="email"]').as('inputEmail')
      cy.get('input[name="password"]').as('inputPassword')
      cy.get('button[aria-label="Crear Cuenta"]').as('buttonCreate')

      cy.get('@buttonCreate').click()

      cy.get('p').contains('El nombre es requerido').should('be.visible')
      cy.get('p').contains('El correo es requerido').should('be.visible')
      cy.get('p').contains('La contraseña es requerida').should('be.visible')

      cy.get('@inputName').type('a3af')
      cy.get('p').contains('El nombre no es válido').should('be.visible')

      cy.get('@inputEmail').type('wnfafp3w')
      cy.get('p').contains('El correo no es válido').should('be.visible')

      cy.get('@inputPassword').type('hfw')
      cy.get('p').contains('Debe tener al menos 6 caracteres').should('be.visible')

      cy.get('@inputName').clear()
      cy.get('@inputEmail').clear()
      cy.get('@inputPassword').clear()

      cy.get('@inputName').type(userDetails.name)
      cy.get('@inputEmail').type(userDetails.email)
      cy.get('@inputPassword').type(userDetails.password)

      cy.get('@buttonCreate').click()

      cy.get('div').contains('Un usuario ya existe con ese usuario').should('be.visible')
    })

    it('should ', () => {
      cy.get('input[name="name"]').as('inputName')
      cy.get('input[name="email"]').as('inputEmail')
      cy.get('input[name="password"]').as('inputPassword')
      cy.get('button[aria-label="Crear Cuenta"]').as('buttonCreate')

      cy.get('@inputName').type(namUser)
      cy.get('@inputEmail').type(emailUser)
      cy.get('@inputPassword').type(passwordUser)

      cy.get('@buttonCreate').click()

      cy.get('img[alt="Geek Mobile Repair"]').should('be.visible')
    })
  })
})
