import React, { Dispatch, createContext, useState, FC, ReactNode } from 'react'

import { ProductProps } from 'Helpers'

export const ProductContext = createContext<{
  product: ProductProps | null
  setProduct: Dispatch<any> | null
}>({
  product: null,
  setProduct: null,
})

export const ProductProvider: FC<{
  children: ReactNode
}> = ({ children }) => {
  const [product, setProduct] = useState<ProductProps | null>(null)

  return (
    <ProductContext.Provider value={{ product, setProduct }}>
      <>{children}</>
    </ProductContext.Provider>
  )
}
