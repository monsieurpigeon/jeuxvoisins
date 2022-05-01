import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Menu = styled.ul`
  padding: 0;
  margin: 0;
  display: flex;
  gap: 10px;
`

const MenuElement = styled.li`
  display: block;
`

export const Navigation = () => {
  return (
    <Menu>
      <Link
        to={{
          pathname: '/',
        }}
      >
        <MenuElement>Game</MenuElement>
      </Link>
      <Link
        to={{
          pathname: '/people',
        }}
      >
        <MenuElement>People</MenuElement>
      </Link>
      <Link
        to={{
          pathname: '/company',
        }}
      >
        <MenuElement>Company</MenuElement>
      </Link>
    </Menu>
  )
}
