import React, { Dispatch, createContext, useState, FC, ReactNode } from 'react'

import { ProductProps } from 'Helpers'

export const ProductsContext = createContext<{
  product: [ProductProps] | null
  setProduct: Dispatch<any> | null
}>({
  product: null,
  setProduct: null,
})

export const ProductsProvider: FC<{
  children: ReactNode
}> = ({ children }) => {
  const [product, setProduct] = useState<[ProductProps] | null>(null)

  return (
    <ProductsContext.Provider value={{ product, setProduct }}>
      <>{children}</>
    </ProductsContext.Provider>
  )
}
