import { AppRouter } from './router'
import { AppTheme } from './theme/AppTheme'

const EcommerceApp = () => {
  return (
    <>
      <AppTheme>
        <AppRouter />
      </AppTheme>
    </>
  )
}

export default EcommerceApp
