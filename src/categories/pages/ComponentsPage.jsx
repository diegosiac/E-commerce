
import { CategoriesLayout } from '../layout/CategoriesLayout'
import { CardProduct } from '../../product/components'

export const ComponentsPage = () => {
  return (
    <CategoriesLayout
      title='Todos Nuestros Componentes'
      titlePrimary='Calidad de Nuestros Componentes'
      titleSecondary='Amplia variedad de opciones'
      titleThird='Servicio al cliente'
      titleFourth='Experiencia y reputación'
      descriptionPrimary='En nuestra empresa, nos enorgullece ofrecer componentes de la más alta calidad en el mercado gracias a nuestros provedores.'
      descriptionSecondary='Entendemos que cada cliente tiene necesidades específicas. Por eso, ofrecemos una amplia gama de componentes para adaptarnos a diversas aplicaciones.'
      descriptionThird='Nuestro compromiso con la satisfacción del cliente es fundamental.'
      descriptionFourth='Contamos con una sólida experiencia y una reputación establecida en la industria de componentes.'
      urlSecondary='../../assets/imgs/backgrounds/phoneConfig.png'
    >
      <CardProduct />
      <CardProduct />
      <CardProduct />
      <CardProduct />
      <CardProduct />
      <CardProduct />
      <CardProduct />
    </CategoriesLayout>
  )
}
