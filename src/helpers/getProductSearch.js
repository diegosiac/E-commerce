import ecommerceApi from '../api/ecommerceApi'

export const getProductSearch = async (query) => {
  const { data } = await ecommerceApi.get('search', { params: { query } })

  return data.queries
}
