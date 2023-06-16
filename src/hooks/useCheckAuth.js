import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { checkingAuthentication } from '../store/auth'

export const useCheckAuth = () => {
  const { status } = useSelector(state => state.auth)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(checkingAuthentication())
  }, [])

  return {
    status
  }
}
