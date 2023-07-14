import { useProductStore } from '../../hooks'
import { CATEGORIES } from '../../helpers/categories'
import { CategoriesLayout } from '../layout/CategoriesLayout'
import { CardProduct, SkeletonProduct } from '../../product/components'
import phoneConfig from '../../assets/imgs/backgrounds/phoneConfig.webp'

export const ComponentsPage = () => {
  const { products } = useProductStore()

  const componentsProducts = products?.filter(product => product.category === CATEGORIES.COMPONENTS)

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
      urlSecondary={phoneConfig}
    >
      {
        products
          ? componentsProducts.map(({ id, ...props }) => (
            <CardProduct
              key={id}
              id={id}
              {...props}
            />
          ))
          : (
            <>
              <SkeletonProduct />
              <SkeletonProduct />
              <SkeletonProduct />
              <SkeletonProduct />
              <SkeletonProduct />
              <SkeletonProduct />
              <SkeletonProduct />
            </>
            )
      }
    </CategoriesLayout>
  )
}
