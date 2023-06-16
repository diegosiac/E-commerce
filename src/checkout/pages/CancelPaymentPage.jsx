import { Grid, List, ListItem, ListItemText, Typography } from '@mui/material'
import { CheckoutStatusLayout } from '../layout/CheckoutStatusLayout'

const recomendations = [
  'Verifica la información de pago en Paypal',
  'Comunícate con el servicio de atención al cliente',
  'Verifica la información de la compra',
  'Asegúrate de tener todos los detalles relevantes de la transacción, como el número de pedido, la fecha de compra y el monto pagado'
]

export const CancelPaymentPage = () => {
  return (
    <CheckoutStatusLayout title='Algo ocurrió mal' boxColor='#ff0000'>
      <Grid container className='bg-white p-5'>
        <Typography>Disculpe, pero hubo un problema con su compra. Lamentablemente, ocurrió un error en el proceso y no se completó correctamente. Si tiene alguna pregunta adicional o necesita asistencia, no dude en ponerse en contacto con nuestro servicio de atención al cliente.</Typography>

        <List className='mt-5'>
          <Typography>Algunas recomendaciones</Typography>

          {recomendations.map((text, index) => (
            <ListItem key={text}>
              <ListItemText
                primary={`${index + 1}.- ${text}`}
              />
            </ListItem>
          ))}

        </List>

      </Grid>
    </CheckoutStatusLayout>
  )
}
