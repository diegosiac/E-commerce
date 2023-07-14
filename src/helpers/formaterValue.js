
export const formaterValue = (value) => {
  const formattedNumber = value.toLocaleString('es-MX', { style: 'currency', currency: 'MXN' })

  return formattedNumber
}
