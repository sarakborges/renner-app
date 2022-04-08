import { ProductProps } from 'Helpers'
import React, { Dispatch, createContext, useState, FC } from 'react'

export const ProductContext = createContext<{
  product: ProductProps | null
  setProduct: Dispatch<any> | null
}>({
  product: null,
  setProduct: null,
})

const ProductProvider: FC<{
  children: FC
}> = ({ children }) => {
  const [product, setProduct] = useState<ProductProps | null>(null)

  return (
    <ProductContext.Provider value={{ product, setProduct }}>
      <>{children}</>
    </ProductContext.Provider>
  )
}

export default ProductProvider
