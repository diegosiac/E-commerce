import PropTypes from 'prop-types'
import { Box, Typography } from '@mui/material'

export const RowShop = ({ label, value, strong }) => {
  return (
    <Box className='flex'>
      <Typography
        className={`w-[77.448%] ${strong ? 'font-bold' : ''}`}
        component='span'
      >{label}:
      </Typography>

      <Typography
        className={`w-[20.448%] text-right ${strong ? 'font-bold' : ''}`}
        component='span'
      >${value}
      </Typography>
    </Box>
  )
}

RowShop.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  strong: PropTypes.bool.isRequired
}
