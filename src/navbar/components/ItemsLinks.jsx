import { Link } from 'react-router-dom'
import { ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import PropTypes from 'prop-types'

export const ItemsLinks = ({ title, icon, to }) => {
  const label = `Ir a ${title}`

  return (
    <ListItem>
      <ListItemButton LinkComponent={Link} to={to} title={label} aria-label={label}>
        <ListItemIcon sx={{ color: 'primary.main' }}>
          {icon}
        </ListItemIcon>
        <ListItemText
          primary={title}
          primaryTypographyProps={{
            variant: 'subtitle1'
          }}
        />
      </ListItemButton>
    </ListItem>

  )
}

ItemsLinks.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.element.isRequired,
  to: PropTypes.string.isRequired
}
