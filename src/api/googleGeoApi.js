import axios from 'axios'
import { getEnvVariables } from '../helpers'

const { VITE_GOOGLE_URL, VITE_GOOGLE_KEY } = getEnvVariables()

const googleGeoApi = axios.create({
  baseURL: VITE_GOOGLE_URL
})

googleGeoApi.interceptors.request.use(config => {
  config.params = {
    ...config.params,
    key: VITE_GOOGLE_KEY
  }

  return config
})

export default googleGeoApi
