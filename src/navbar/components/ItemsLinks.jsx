import { ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import PropTypes from 'prop-types'
import { useNavigate } from 'react-router-dom'

export const ItemsLinks = ({ title, icon, to }) => {
  const navigate = useNavigate()

  const onChangePage = () => navigate(to, { replace: true })
  return (
    <ListItem>
      <ListItemButton onClick={onChangePage}>
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
