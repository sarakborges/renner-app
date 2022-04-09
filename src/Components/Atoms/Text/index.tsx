import React, { FC } from 'react'

import { TextProps } from './props'

import * as Styled from './style'

export const Text: FC<TextProps> = ({ children, fs, fc, fw }) => {
  return (
    <Styled.Text fs={fs} fc={fc} fw={fw}>
      {children}
    </Styled.Text>
  )
}
