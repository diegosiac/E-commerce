import { CategoriesLayout } from '../layout/CategoriesLayout'
import { CardProduct } from '../../product/components'
import devicesDigital from '../../assets/imgs/backgrounds/devicesDigital.webp'

export const DevicesPage = () => {
  return (
    <CategoriesLayout
      title='Todos Nuestros Dispositivos'
      titlePrimary='Calidad de Nuestros Dispositivos '
      titleSecondary='Calidad superior'
      titleThird='Variedad de opciones'
      titleFourth='Soporte y servicio al cliente'
      descriptionPrimary='En nuestra empresa, nos enorgullece ofrecer dispositivos de la más alta calidad que se destacan por su excelencia y confiabilidad, tenemos una gran catidad de marcas de los mejores provedores'
      descriptionSecondary='Nos comprometemos a ofrecer dispositivos de la más alta calidad que cumplen y superan los estándares de la industria.'
      descriptionThird='Entendemos que cada cliente tiene necesidades y preferencias únicas. Por eso, ofrecemos una amplia gama de dispositivos'
      descriptionFourth='Nos comprometemos a brindar un excelente servicio al cliente en cada etapa del proceso.'
      urlSecondary={devicesDigital}
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
