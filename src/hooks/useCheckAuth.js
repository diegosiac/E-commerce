import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { checkingAuthentication } from '../store/auth'
import { useAuthStore } from './'

export const useCheckAuth = () => {
  const { status } = useAuthStore()

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(checkingAuthentication())
  }, [])

  return {
    status
  }
}
