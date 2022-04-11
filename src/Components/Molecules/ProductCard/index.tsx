import React, { FC } from 'react'
import Link from 'next/link'

import { intToCurrency, ProductProps, ROUTES } from 'Helpers'

import { Text } from 'Components/Atoms'

import * as Styled from './style'

export const ProductCard: FC<{ product: ProductProps }> = ({ product }) => {
  return (
    <>
      <img src={product.picture} alt={product.name} />

      <Text>
        <Link href={ROUTES.PRODUCT.replace(':id', product._id)}>
          <a>{product.name}</a>
        </Link>
      </Text>

      <p>{intToCurrency(product.price)}</p>
    </>
  )
}
