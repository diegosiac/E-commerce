import { render } from '@testing-library/react'
import { CategoriesLayout } from '../../../src/categories/layout/CategoriesLayout'
import phoneConfig from '../../assets/imgs/backgrounds/phoneConfig.webp'

describe('Testing on <CategoriesLayout/>', () => {
  test('It must render correctly with the grid and match with the snapshot', () => {
    const tree = render(
      <CategoriesLayout
        title='Title test'
        titlePrimary='Title primary test'
        titleSecondary='Title secondary test'
        titleThird='Title third test'
        titleFourth='Title fourth test'
        descriptionPrimary='Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo eligendi praesentium'
        descriptionSecondary='Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo eligendi praesentium'
        descriptionThird='Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo eligendi praesentium'
        descriptionFourth='Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo eligendi praesentium'
        urlSecondary={phoneConfig}
      >
        test children
      </CategoriesLayout>
    )

    expect(tree).toMatchSnapshot()
  })

  test('should render correctly without including the grid and match with the snapshot', () => {
    const tree = render(
      <CategoriesLayout
        title='Title test'
        disableGrid
      >
        test children
      </CategoriesLayout>
    )

    expect(tree).toMatchSnapshot()
  })
})
