import React, { Dispatch, createContext, useState, FC } from 'react'

import { CartProps } from 'Helpers'

export const CartsContext = createContext<{
  cart: CartProps | null
  setCart: Dispatch<any> | null
}>({
  cart: null,
  setCart: null,
})

export const CartsProvider: FC<{
  children: FC
}> = ({ children }) => {
  const [cart, setCart] = useState<CartProps | null>(null)

  return (
    <CartsContext.Provider value={{ cart, setCart }}>
      <>{children}</>
    </CartsContext.Provider>
  )
}
