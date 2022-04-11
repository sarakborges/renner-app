import React, { FC, useContext } from 'react'

import { ProductsContext } from 'Contexts'

import { Container } from 'Components/Atoms'
import { LowestPriceProductBanner } from 'Components/Molecules'
import { Header, Footer, ProductsCarousel } from 'Components/Organisms'

import * as Styled from './style'

export const HomeTemplate: FC = () => {
  const { products } = useContext(ProductsContext)
  const { allProducts, lowestPriceProduct } = products

  console.log(products)

  return (
    <Styled.HomeTemplate>
      <Header />

      <LowestPriceProductBanner product={lowestPriceProduct} />

      <Container>
        <Styled.HomeContent>
          <ProductsCarousel products={allProducts} />
        </Styled.HomeContent>
      </Container>

      <Footer />
    </Styled.HomeTemplate>
  )
}
