import React, { FC } from 'react'

import { Text } from 'Components/Atoms'

import * as Styled from './style'

export const Footer: FC = () => {
  return (
    <Styled.Footer>
      <Text fc="white" fw={300} fs="14px">
        Esse é o site da Renner
      </Text>
    </Styled.Footer>
  )
}
