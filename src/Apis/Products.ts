import { productsMock } from './Mocks'

const getAllProducts = async (page: number, itemsPerPage: number) => {
  return [...productsMock].slice((page - 1) * itemsPerPage, page * itemsPerPage)
}

const getProductById = async (id: string) => {
  return [...productsMock].find((item) => item._id === id)
}

const getLowestPriceProduct = async () => {
  return [...productsMock].reduce((lowestPriceItem, item) =>
    item.price < lowestPriceItem?.price ? item : lowestPriceItem
  )
}

export const ProductsAPI = {
  getAllProducts,
  getProductById,
  getLowestPriceProduct,
}
