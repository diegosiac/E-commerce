
export const getDayTranform = (date) => {
  const monthsEs = [
    'enero',
    'febrero',
    'marzo',
    'abril',
    'mayo',
    'junio',
    'julio',
    'agosto',
    'septiembre',
    'octubre',
    'noviembre',
    'diciembre'
  ]

  const fechaOriginal = new Date(date)

  const day = fechaOriginal.getDate()
  const month = monthsEs[fechaOriginal.getMonth()]
  const year = fechaOriginal.getFullYear()

  const dateTrasform = `${day} de ${month} del ${year}`

  return dateTrasform
}
