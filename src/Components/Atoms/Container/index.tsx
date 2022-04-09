import React, { FC, ReactNode } from 'react'

import * as Styled from './style'

export const Container: FC<{ children?: ReactNode }> = ({ children }) => {
  return <Styled.Container>{children}</Styled.Container>
}
