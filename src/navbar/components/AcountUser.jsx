import { useAuthStore } from '../../hooks'
import { UserIcon } from './'

export const AcountUser = () => {
  const { user, status } = useAuthStore()
  return (
    <>
      {
        status === 'authenticated'
          ? <UserIcon userName={user.name} to='/profile' />
          : <UserIcon userName='Inicar Sesion' to='/auth' />
      }
    </>
  )
}
