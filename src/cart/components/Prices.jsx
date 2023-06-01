import { Container, Typography } from '@mui/material'
import PropTypes from 'prop-types'

export const Prices = ({ title, value, classTitle, classValue }) => {
  return (
    <Container className='flex justify-between my-2 p-0'>
      <Typography component='span' className={classTitle}>{title}</Typography>
      <Typography component='span' className={classValue}>{value}</Typography>
    </Container>
  )
}

Prices.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  classTitle: PropTypes.string,
  classValue: PropTypes.string
}
