import PropTypes from 'prop-types'
import { Box, Typography } from '@mui/material'

export const RowShop = ({ label, value, strong, colorValue }) => {
  const valueColor = colorValue ? `text-[${colorValue}]` : ''

  return (
    <Box className='flex justify-between'>
      <Typography
        className={`max-w-[68%] ${strong ? 'font-bold' : ''}`}
        component='span'
      >{label}:
      </Typography>

      <Typography
        className={`text-right ${strong ? 'font-bold' : ''} ${valueColor}`}
        component='span'
      >{value}
      </Typography>
    </Box>
  )
}

RowShop.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]).isRequired,
  strong: PropTypes.bool,
  colorValue: PropTypes.string
}
