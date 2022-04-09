import styled from 'styled-components'

export const Header = styled.header`
  position: sticky;
  top: 0;
  left: 0;
  z-index: 1;

  padding: 16px 0;

  background-color: var(--black);
`

export const HeaderContent = styled.header`
  display: flex;
  place-items: center;
  place-content: space-between;
`
