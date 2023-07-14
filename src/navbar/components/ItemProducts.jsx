import PropTypes from 'prop-types'
import { Link as LinkRouter } from 'react-router-dom'
import { Link, Typography } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'

export const ItemProducts = ({ query, id, componentProps }) => {
  return (
    <Link
      component={LinkRouter}
      to={`/product/${query}?id=${id}`}
      underline='none'
      {...componentProps}
    >
      <SearchIcon />
      <Typography component='span' className='ml-3'>{query}</Typography>
    </Link>
  )
}

ItemProducts.proptypes = {
  query: PropTypes.string.isRequired
}
