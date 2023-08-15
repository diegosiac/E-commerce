
describe('template spec', () => {
  let userDetails

  before(() => {
    cy.fixture('user').then((data) => {
      userDetails = data
    })
  })

  it.only('passes', () => {
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
  })

  it('should ', () => {
    cy.visit('/')
    cy.viewport(550, 750)
  })
})
