import React, { FC } from 'react'

import { Container, Logo } from 'Components/Atoms'

import * as Styled from './style'

export const Header: FC = () => {
  return (
    <Styled.Header>
      <Container>
        <Styled.HeaderContent>
          <Logo size={60} />
        </Styled.HeaderContent>
      </Container>
    </Styled.Header>
  )
}
