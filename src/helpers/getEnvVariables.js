
export const getEnvVariables = () => {
  return {
    // VITE_MODE: import.meta.env.VITE_MODE,
    VITE_API_URL: import.meta.env.VITE_API_URL,
    VITE_GOOGLE_URL: import.meta.env.VITE_GOOGLE_URL,
    VITE_GOOGLE_KEY: import.meta.env.VITE_GOOGLE_KEY
  }
}
