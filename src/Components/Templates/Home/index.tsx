import React, { FC } from 'react'

import { Container } from 'Components/Atoms'
import { Header, Footer } from 'Components/Organisms'

import * as Styled from './style'

export const HomeTemplate: FC = () => {
  return (
    <>
      <Header />

      <Container>
        <Styled.HomeContent>asd</Styled.HomeContent>
      </Container>

      <Footer />
    </>
  )
}
