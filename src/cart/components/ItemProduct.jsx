import { Box, Button, Container, Grid, Typography } from '@mui/material'
import PropTypes from 'prop-types'
import { useState } from 'react'

export const ItemProduct = ({ name, urlImg, price, stock }) => {
  const [onChange, setOnChange] = useState(1)

  const onInputChange = (e) => {
    const value = Number(e.target.value)
    if (Number.isInteger(value)) {
      setOnChange(value)
      console.log(value > 0)
    }
  }

  const handleIncrease = () => {
    setOnChange(onChange + 1)
  }
  const handleDecrease = () => {
    setOnChange(onChange - 1)
  }

  const msgStock = stock === 1 ? 'Último disponible' : `${stock} disponibles`

  return (
    <Container
      component='section'
      className='flex flex-wrap py-3 border-b-[1px] border-[#dadada]'
    >
      <Grid
        component='article'
        className='flex pb-5 w-full lg:w-max mr-16'
      >
        <img src={urlImg} alt={name} className='h-16' />
        <Grid item className='flex justify-between flex-col items-start ml-2'>
          <Typography
            variant='h4'
            component='span'
            className='whitespace-nowrap'
          >
            {name}
          </Typography>
          <Button
            type='submit'
            color='success'
            className='p-0'
          >
            Eliminar
          </Button>
        </Grid>

      </Grid>

      <Box className='flex flex-col'>

        <Grid className='flex border-[1px] w-min'>
          <Button
            onClick={handleDecrease}
            className='min-w-[35px] text-[#3483fa] text-lg'
            disabled={onChange <= 1}
          >-
          </Button>
          <input
            maxLength='250'
            value={onChange}
            onChange={onInputChange}
            className='w-11 p-0 text-center outline-none'
          />
          <Button
            onClick={handleIncrease}
            className='min-w-[35px] text-[#3483fa] text-lg'
            disabled={onChange >= stock}
          >+
          </Button>
        </Grid>

        <Typography
          component='span'
          className={`whitespace-nowrap text-center text-[#999] mt-2 ${onChange === 0 || onChange > stock ? 'text-[#f23d4f]' : ''}`}
        >
          {
            onChange === 0
              ? 'Puedes comprar desde 1 u'
              : onChange > stock
                ? `Puedes comprar hasta ${stock} u.`
                : msgStock
          }
        </Typography>
      </Box>

      <Typography
        variant='subtitle1'
        component='span'
        className='whitespace-nowrap text-end flex-grow'
      >
        $ {price}
      </Typography>

    </Container>
  )
}

ItemProduct.propTypes = {
  name: PropTypes.string.isRequired,
  urlImg: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  stock: PropTypes.number.isRequired
}
