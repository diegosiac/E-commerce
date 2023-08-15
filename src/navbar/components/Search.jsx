import { useEffect, useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Autocomplete, Box, Divider, IconButton, Paper, TextField } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import { useProductStore } from '../../hooks'
import { getProductSearch } from '../../helpers'
import { clearAllSearch, setQuery } from '../../store/products/thunks'
import { ItemProducts } from './'

export const Search = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { query } = useProductStore()
  const [products, setProducts] = useState([])
  const inputRef = useRef(null)

  useEffect(() => {
    const timer = setTimeout(() => {
      if (query.length !== 0) return setResultProducts(query)
    }, 250)

    if (query.length === 0) {
      dispatch(clearAllSearch())
      setProducts([])
    }

    return () => {
      clearTimeout(timer)
    }
  }, [query])

  const handleSearch = (e, newValue) => {
    dispatch(setQuery(newValue))
  }

  const handleProductsSearch = () => {
    if (query.length === 0) return inputRef.current.focus()

    navigate(`/categories/search?query=${query}`, { replace: true })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (query.length === 0) return

    navigate(`/categories/search?query=${query}`, { replace: true })
  }

  const setResultProducts = async (query) => {
    const results = await getProductSearch(query)

    setProducts(results)
  }

  return (
    <Paper
      component='form'
      data-testid='form-search'
      className='flex items-center relative bg-white'
      onSubmit={handleSubmit}
    >
      <Autocomplete
        clearOnBlur={false}
        disableClearable
        noOptionsText='No hay opciones disponibles'
        className='flex-grow'
        ListboxProps={{
          className: 'bg-white'
        }}
        value={null}
        inputValue={query}
        options={products}
        getOptionLabel={(option) => option.name}
        renderOption={(props, { id, name }) => (
          <ItemProducts key={id} query={name} id={id} componentProps={props} />
        )}
        onInputChange={handleSearch}
        renderInput={({ InputProps, inputProps, ...params }) =>
          <TextField
            {...params}
            placeholder='Busca reparaciones y mas..'
            inputRef={inputRef}
            color='success'
            inputProps={{
              ...inputProps,
              'aria-label': 'Ingresa lo que quieras encontrar'
            }}
            InputProps={{
              ...InputProps,
              className: 'h-11',
              style: { paddingRight: 0 },
              endAdornment: <Box className='flex items-center'>
                <Divider className='h-7' orientation='vertical' />
                <IconButton
                  aria-label='Buscar'
                  type='button'
                  title='Buscar'
                  onClick={handleProductsSearch}
                >
                  <SearchIcon />
                </IconButton>
              </Box>
            }}
          />}
      />

    </Paper>
  )
}
