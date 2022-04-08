import { productsMock } from './Mocks'

const getAllProducts = (page: number, itemsPerPage: number) => {
  return [...productsMock].slice((page - 1) * itemsPerPage, page * itemsPerPage)
}

const getProductById = (id: string) => {
  return [...productsMock].find((item) => item._id === id)
}

const getLowestPriceProduct = () => {
  return [...productsMock].reduce((lowestPriceItem, item) =>
    item.price < lowestPriceItem?.price ? item : lowestPriceItem
  )
}

export const ProductsAPI = {
  getAllProducts,
  getProductById,
  getLowestPriceProduct,
}
