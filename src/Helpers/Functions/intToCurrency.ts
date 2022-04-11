export const intToCurrency = (val: number) => {
  return (val / 100).toLocaleString('pt-br', {
    style: 'currency',
    currency: 'BRL',
  })
}
