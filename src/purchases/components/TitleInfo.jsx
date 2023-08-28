import { Link as routerLink } from 'react-router-dom'
import { Box, Link, Typography } from '@mui/material'
import PropTypes from 'prop-types'

export const TitleInfo = ({ title, value, link, to, className }) => {
  return (
    <Box className={`flex flex-col ${className}`}>
      <Typography
        component='span'
        className='text-xs text-[#565959] break-all'
      >
        {title}
      </Typography>
      {
        link
          ? <Link
              component={routerLink}
              to={to}
              className='text-[#007185] no-underline hover:underline hover:text-[#C7511F]'
              title='Ver detalles del pedido'
              aria-label='Ver detalles del pedido'
            >
            {value}
          </Link>
          : <Typography
              variant='subtitle2'
              component='span'
              className='text-[#565959]'
            >
            {value}
          </Typography>
      }
    </Box>
  )
}

TitleInfo.proptypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  link: PropTypes.bool,
  className: PropTypes.string,
  to: PropTypes.string
}

TitleInfo.defaultProps = {
  className: ''
}
