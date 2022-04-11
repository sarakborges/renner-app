import React, { FC } from 'react'
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from 'pure-react-carousel'

import { Container } from 'Components/Atoms'
import { Header, Footer } from 'Components/Organisms'

import * as Styled from './style'

export const HomeTemplate: FC = () => {
  return (
    <>
      <Header />

      <Container>
        <Styled.HomeContent>
          <CarouselProvider
            naturalSlideWidth={100}
            naturalSlideHeight={25}
            totalSlides={3}
          >
            <Slider>
              <Slide index={0}>I am the first Slide.</Slide>
              <Slide index={1}>I am the second Slide.</Slide>
              <Slide index={2}>I am the third Slide.</Slide>
            </Slider>
          </CarouselProvider>
        </Styled.HomeContent>
      </Container>

      <Footer />
    </>
  )
}
