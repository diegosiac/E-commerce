import { UserIcon } from './'

export const AcountUser = () => {
  const userName = 'Diego'
  const login = true

  return (
    <>
      {
        login
          ? <UserIcon userName={userName} to='/profile' />
          : <UserIcon userName='Inicar Sesion' to='/auth' />
    }
    </>
  )
}
