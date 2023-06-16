import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { clearMessage } from '../store/auth'

export const useClearMessage = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    return () => {
      dispatch(clearMessage())
    }
  }, [])
}
