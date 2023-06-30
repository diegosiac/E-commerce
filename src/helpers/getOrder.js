
export const getOrder = (id, purchases) => {
  const purchase = purchases.find(item => item.id === id)
  return purchase
}
