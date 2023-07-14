import { googleGeoApi } from '../api'

export const getLocation = async ({ country, zip }) => {
  try {
    const components = `country:${country}|postal_code:${zip}`
    const { data } = await googleGeoApi.get('geocode/json', { params: { components } })

    if (data.status !== 'OK') return undefined

    return data.results
  } catch (error) {
    return error
  }
}
