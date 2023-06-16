import { useSelector } from 'react-redux'

export const useAuthStore = () => {
  const { status, errorMessage, user } = useSelector(state => state.auth)
  return {
    status,
    errorMessage,
    user
  }
}
