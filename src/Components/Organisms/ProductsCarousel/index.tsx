import React, { FC } from 'react'
import { CarouselProvider, Slider, Slide } from 'pure-react-carousel'

import { ProductProps } from 'Helpers'

import { ProductCard } from 'Components/Molecules'

import * as Styled from './style'

export const ProductsCarousel: FC<{ products: ProductProps[] | null }> = ({
  products,
}) => {
  return (
    <>
      {!(!products || products?.length < 0) && (
        <Styled.ProductsCarousel>
          <CarouselProvider
            naturalSlideWidth={100}
            naturalSlideHeight={100}
            totalSlides={products.length}
            visibleSlides={4}
          >
            <Slider>
              {products.map((item, key) => {
                return (
                  <Slide index={key} key={item._id}>
                    <ProductCard product={item} />
                  </Slide>
                )
              })}
            </Slider>
          </CarouselProvider>
        </Styled.ProductsCarousel>
      )}
    </>
  )
}
