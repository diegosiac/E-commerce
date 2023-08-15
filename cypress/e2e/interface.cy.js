
describe('Tests on the interface and web page navigation', () => {
  let userDetails

  before(() => {
    cy.fixture('user').then((data) => {
      userDetails = data
    })
  })

  beforeEach(() => {
    cy.visit('/')

    cy.get('img[alt="Geek Mobile Repair"]').as('imgHome')
    cy.get('@imgHome').should('be.visible')
    cy.contains('h2', 'Todos Nuestros Productos y Servicios').should('be.visible')
    cy.get('span[data-testid="badgeCart"] span').should('have.text', '0')
  })

  it('Tests in the navigation and routes of the page', () => {
    cy.get('img[alt="Geek Mobile Repair Logo"]').as('ImgLogo')
    cy.get('a[data-testid="navbar-Inicio"]').as('InicioMenu')
    cy.get('a[data-testid="navbar-Reparaciónes"]').as('ReparacionesMenu')
    cy.get('a[data-testid="navbar-Componentes"]').as('ComponentesMenu')
    cy.get('a[data-testid="navbar-Dispositivos"]').as('DispositivosMenu')
    cy.get('a[data-testid="Iniciar sesión navbar"]').as('IniciarSesion')
    cy.get('a[aria-label="Ir al carrito de compras"]').as('CartIcon')

    cy.get('@ImgLogo').should('be.visible')
    cy.get('@InicioMenu').should('be.visible')
    cy.get('@ReparacionesMenu').should('be.visible')
    cy.get('@ComponentesMenu').should('be.visible')
    cy.get('@DispositivosMenu').should('be.visible')
    cy.get('@IniciarSesion').should('be.visible')
    cy.get('@CartIcon').should('be.visible')

    cy.get('@ReparacionesMenu').click()

    cy.contains('h2', 'Todas Nuestras Reparaciónes').should('be.visible')

    cy.get('@InicioMenu').click()
    cy.get('@imgHome').should('be.visible')
    cy.contains('h2', 'Todos Nuestros Productos y Servicios').should('be.visible')

    cy.get('@ComponentesMenu').click()
    cy.contains('h2', 'Todos Nuestros Componentes').should('be.visible')

    cy.get('@DispositivosMenu').click()
    cy.contains('h2', 'Todos Nuestros Dispositivos').should('be.visible')

    cy.get('@ImgLogo').click()
    cy.get('@imgHome').should('be.visible')
    cy.contains('h2', 'Todos Nuestros Productos y Servicios').should('be.visible')

    cy.get('@IniciarSesion').click()
    cy.contains('h1', 'Iniciar sesión').should('be.visible')

    cy.get('@ImgLogo').click()

    cy.get('@CartIcon').click()
    cy.contains('h1', 'Iniciar sesión').should('be.visible')

    cy.get('@ImgLogo').click()
  })

  it('Tests in the navigation and routes of the page in mobile', () => {
    cy.viewport(550, 750)

    cy.get('button[aria-label="Menú de usuario"]').as('MenuButton')

    cy.get('@MenuButton').click()

    cy.get('a[data-testid="menu-Inicio"]').as('InicioMenu')
    cy.get('a[data-testid="menu-Reparaciónes"]').as('ReparacionesMenu')
    cy.get('a[data-testid="menu-Componentes"]').as('ComponentesMenu')
    cy.get('a[data-testid="menu-Dispositivos"]').as('DispositivosMenu')
    cy.get('a[data-testid="Iniciar sesión menu"]').as('IniciarSesionMenu')
    cy.get('a[aria-label="Registrarse"]').as('RegistrarMenu')
    cy.get('a[aria-label="Ir al carrito de compras"]').as('CartIcon')

    cy.get('@InicioMenu').should('be.visible')
    cy.get('@ReparacionesMenu').should('be.visible')
    cy.get('@ComponentesMenu').should('be.visible')
    cy.get('@DispositivosMenu').should('be.visible')
    cy.get('@IniciarSesionMenu').should('be.visible')
    cy.get('@RegistrarMenu').should('be.visible')

    cy.get('@ReparacionesMenu').click()
    cy.contains('h2', 'Todas Nuestras Reparaciónes').should('be.visible')

    cy.get('@MenuButton').click()

    cy.get('@ComponentesMenu').click()
    cy.contains('h2', 'Todos Nuestros Componentes').should('be.visible')

    cy.get('@MenuButton').click()

    cy.get('@DispositivosMenu').click()
    cy.contains('h2', 'Todos Nuestros Dispositivos').should('be.visible')

    cy.get('@MenuButton').click()

    cy.get('@InicioMenu').click()
    cy.get('@imgHome').should('be.visible')
    cy.contains('h2', 'Todos Nuestros Productos y Servicios').should('be.visible')

    cy.get('@MenuButton').click()

    cy.get('@IniciarSesionMenu').click()
    cy.contains('h1', 'Iniciar sesión').should('be.visible')

    cy.get('img[alt="Geek Mobile Repair Logo"]').as('ImgLogo')

    cy.get('@ImgLogo').click()
    cy.get('@imgHome').should('be.visible')
    cy.contains('h2', 'Todos Nuestros Productos y Servicios').should('be.visible')

    cy.get('@MenuButton').click()

    cy.get('@RegistrarMenu').click()
    cy.contains('h1', 'Crear cuenta').should('be.visible')

    cy.get('@ImgLogo').click()

    cy.get('@CartIcon').click()
    cy.contains('h1', 'Iniciar sesión').should('be.visible')

    cy.get('@ImgLogo').click()
  })

  it('Tests in adding a product to the cart without logging in and in the search input', () => {
    cy.get('div[data-testid="cardProduct"]').first().click()

    cy.get('a[aria-label="AGREGAR AL CARRITO"]').as('addCart')

    cy.get('@addCart').click()
    cy.contains('h1', 'Iniciar sesión').should('be.visible')

    cy.get('img[alt="Geek Mobile Repair Logo"]').as('imgLogo')

    cy.get('@imgLogo').click()

    cy.get('input[aria-label="Ingresa lo que quieras encontrar"]').as('inputSearch')

    cy.get('@inputSearch').type('pantalla')

    cy.get('[id=":r7:-option-0"]').click()

    cy.get('@addCart').click()
    cy.contains('h1', 'Iniciar sesión').should('be.visible')

    cy.get('@imgLogo').click()

    cy.get('@inputSearch').clear()
    cy.get('@inputSearch').type('pantalla')

    cy.get('button[aria-label="Buscar"]').click()

    cy.get('div[data-testid="cardProduct"]').first().click()

    cy.get('@addCart').click()
    cy.contains('h1', 'Iniciar sesión').should('be.visible')

    cy.get('@imgLogo').click()
  })

  describe('Tests in the interface and navigation of the web page with the session started', () => {
    beforeEach(() => {
      cy.visit('/auth')

      cy.get('input[name="email"]').type(userDetails.email)

      cy.get('input[name="password"]').type(userDetails.password)

      cy.get('button[aria-label="Iniciar Sesión"]').click()
    })

    it('Tests in navigation and routes', () => {
      cy.get('a[aria-label="Ir al carrito de compras"]').click()
      cy.get('span').contains('Productos').should('be.visible')

      cy.get('a[data-testid="Iniciar sesión navbar"]').click()

      cy.get('span').contains('Mis Datos').should('be.visible')
      cy.get('span').contains('Mis Compras').should('be.visible')

      cy.get('a[aria-label="IR A MIS COMPRAS"]').click()
      cy.get('h1').contains('Mis Compras').should('be.visible')
      cy.get('span').contains('Aún no ha hecho una compra').should('be.visible')

      cy.get('a[aria-label="Ir al Perfil"]').click()
      cy.get('span').contains('Mis Datos').should('be.visible')
      cy.get('span').contains('Mis Compras').should('be.visible')

      cy.get('button[aria-label="Cerrar Sesión"]').click()

      cy.contains('h1', 'Iniciar sesión').should('be.visible')
    })

    it('Tests in the shopping cart', () => {
      cy.get('div[data-testid="cardProduct"]').eq(0).click()
      cy.get('button[aria-label="AGREGAR AL CARRITO"]').as('addCart')
      cy.get('@addCart').click()
      cy.get('a[aria-label="Volver"]').click()

      cy.get('div[data-testid="cardProduct"]').eq(1).click()
      cy.get('@addCart').click()

      cy.get('a[aria-label="Ir al carrito de compras"]').click()

      cy.get('section[data-testid="ItemProduct"]').eq(0).as('product')

      cy.get('@product').find('#Product-quantity').contains('1')

      cy.get('@product').find('button[arial-label="Agregar una unidad"]').click()

      cy.get('@product').find('#Product-quantity').contains('2')

      cy.get('@product').find('button[arial-label="Quitar una unidad"]').click()

      cy.get('@product').find('#Product-quantity').contains('1')

      cy.get('section[data-testid="ItemProduct"]').each(() => {
        cy.get('button[aria-label="Eliminar"]').eq(0).click()
      })

      cy.get('span').contains('Tu carrito está vacío').should('be.visible')
    })
  })
})
