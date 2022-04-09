import Image from 'next/image'
import React, { FC } from 'react'

import LogoRenner from 'Assets/Images/renner-logo.png'

import * as Styled from './style'

export const Logo: FC<{ size: number }> = ({ size }) => {
  return (
    <Styled.Container>
      <Image src={LogoRenner} alt="Renner" width={size} height={size} />
    </Styled.Container>
  )
}
