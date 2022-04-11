import React, { FC } from 'react'

import { ProductProps } from 'Helpers'

import * as Styled from './style'

export const LowestPriceProductBanner: FC<{
  product: ProductProps | null
}> = ({ product }) => {
  if (!product?._id) {
    return <></>
  }

  return (
    <Styled.LowestPriceProduct>
      <img src={product.picture} alt={product.name} />
    </Styled.LowestPriceProduct>
  )
}
