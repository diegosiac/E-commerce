import ecommerceApi from '../api/ecommerceApi'

export const getProductSearch = async (query) => {
  try {
    const { data } = await ecommerceApi.get('search', { params: { query } })

    return data.queries
  } catch (error) {
    return undefined
  }
}
