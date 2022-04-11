import React, { Dispatch, createContext, useState, FC, ReactNode } from 'react'

import { ProductProps } from 'Helpers'

interface ProductsContextProps {
  allProducts: ProductProps[] | null
  lowestPriceProduct: ProductProps | null
}

const INITIAL_STATE = {
  allProducts: null,
  lowestPriceProduct: null,
}

export const ProductsContext = createContext<{
  products: ProductsContextProps
  setProducts: Dispatch<any> | null
}>({
  products: { ...INITIAL_STATE },
  setProducts: null,
})

export const ProductsProvider: FC<{
  children: ReactNode
}> = ({ children }) => {
  const [products, setProducts] = useState<ProductsContextProps>({
    ...INITIAL_STATE,
  })

  return (
    <ProductsContext.Provider value={{ products, setProducts }}>
      <>{children}</>
    </ProductsContext.Provider>
  )
}
