import styled from '@emotion/styled'

const ListContainer = styled.ul`
  min-width: 300px;
  display: flex;
  flex-direction: row;
  list-style-type: none;
  justify-content: space-between;
`

const NavbarContainer = styled.div`
  grid-row: 1;
  max-width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 70px;
  padding: 0 28px;
  border-bottom: 1px solid black;
`

export const NavbarStyles = {
  ListContainer,
  NavbarContainer
}
