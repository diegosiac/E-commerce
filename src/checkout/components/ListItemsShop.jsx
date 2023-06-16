import PropTypes from 'prop-types'
import { ListItem, ListItemText, Typography } from '@mui/material'

export const ListItemsShop = ({ primary, secondary, value, bold }) => {
  return (
    <ListItem className='py-1 px-0'>
      <ListItemText primary={primary} secondary={secondary} />
      <Typography
        className={bold ? 'font-bold' : ''}
        component='span'
        variant='body2'
      >{value}
      </Typography>
    </ListItem>
  )
}

ListItemsShop.propTypes = {
  primary: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  secondary: PropTypes.string,
  bold: PropTypes.bool
}
