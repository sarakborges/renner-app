import styled from 'styled-components'

import { TextProps } from './props'

export const Text = styled.p<TextProps>`
  font-size: ${({ fs }) => fs};
  font-weight: ${({ fw }) => fw};
  color: ${({ fc }) => `var(--${fc})`};
`
