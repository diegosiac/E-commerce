import { Grid, Link, Typography } from '@mui/material'
import { Instagram, Facebook } from '@mui/icons-material'
import { TikTok } from '../icons'

export const Footer = () => {
  return (
    <Grid
      container
      component='footer'
      className='w-full p-9 justify-between'
      bgcolor='primary.main'
    >
      <Grid container component='address'>

        <Grid
          item
          className='mb-5 items-start'
        >
          <Typography
            variant='h4'
            component='h3'
            color='primary.contrastText'
          >
            ACERCA DE NOSOTROS
          </Typography>
          <Typography
            component='p'
            className='text-xs max-w-md mt-4'
            color='primary.contrastText'
          >
            Somos una empresa establecida con más de 22 Días en la venta de productos en línea con miles de clientes satisfechos, todos nuestros pagos con tarjeta son por medio de plataformas seguras como PayPal y Mercado Pago.
          </Typography>
        </Grid>

        <Grid
          item
          className='w-full lg:w-auto'
        >
          <Grid item className='text-end'>
            <Typography
              variant='h4'
              component='h3'
              color='primary.contrastText'
              className='mb-2'
            >
              SÍGUENOS EN NUESTRAS REDES
            </Typography>
            <Link
              href='https://www.instagram.com/geek.mobile.repair/'
              color='white'
              className='px-1'
              target='_blank'
              rel='noopener noreferrer'
              title='Ir a Instagram geek mobile'
            >
              <Instagram className='text-4xl hover:text-[#f00075]' />
            </Link>
            <Link
              href='https://www.facebook.com/profile.php?id=100069441991396'
              color='white'
              className='px-1'
              target='_blank'
              rel='noopener noreferrer'
              title='Ir a Facebook geek mobile'
            >
              <Facebook className='text-4xl hover:text-[#1877f2]' />
            </Link>
            <Link
              href='https://www.tiktok.com/@geek.mobile.repair'
              color='white'
              className='px-1'
              target='_blank'
              rel='noopener noreferrer'
              title='Ir a Tiktok geek mobile'
            >
              <TikTok className='text-4xl hover:text-[#00f2eb]' />
            </Link>
          </Grid>

          <Grid item className='flex flex-col text-end mt-2'>
            <Typography
              component='span'
              className='text-xs'
              color='primary.contrastText'
            >
              Copyright © GEEK MOBILE REPAIR. 2023
            </Typography>
            <Typography
              component='span'
              className='text-xs'
              color='primary.contrastText'
            >
              Todos los derechos resevados
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>

  )
}
