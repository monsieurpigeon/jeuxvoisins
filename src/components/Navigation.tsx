import { getAuth, signOut } from 'firebase/auth'
import JSConfetti from 'js-confetti'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { useAuth } from '../contextes/auth'
import { isAdmin } from '../utils/access'

type MenuElementProps = { selected: boolean; onClick: () => void }

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
`

const Menu = styled.ul`
  padding: 0;
  margin: 0;
  display: flex;
`

// TODO : Find a better way to do the color change
const MenuElement = styled.li<MenuElementProps>`
  display: block;
  padding: 10px;
  &:hover {
    background-color: ${(props) => (props.selected ? 'yellow' : 'grey')};
    color: ${(props) => (props.selected ? 'black' : 'white')};
  }
  background-color: ${(props) => (props.selected ? 'yellow' : 'inherit')};
  color: ${(props) => (props.selected ? 'black' : 'inherit')};
`

const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
`

const LogOut = styled.div`
  color: white;
  cursor: pointer;
`

const jsConfetti = new JSConfetti()

const menuElements = [
  {
    label: 'Accueil',
    target: '/',
    onClick: () => {
      jsConfetti.addConfetti()
    },
  },
  { label: 'Jeux', target: '/jeux', onClick: () => null },
  { label: 'Voisins', target: '/voisins', onClick: () => null },
  { label: 'Messages', target: '/messages', onClick: () => null },
  { label: 'Profil', target: '/profil', onClick: () => null },
]

const adminMenuElements = [
  { label: 'Admin', target: '/admin', onClick: () => null },
]

export const Navigation = () => {
  const auth = getAuth()
  const location = useLocation()
  const { currentUser } = useAuth()
  const navigate = useNavigate()

  const handleLogout = () => {
    signOut(auth).then(() => {
      navigate('/')
    })
  }

  return (
    <Header>
      <Menu>
        {[
          ...menuElements,
          ...(isAdmin(currentUser) ? adminMenuElements : []),
        ].map((el) => (
          <StyledLink
            key={el.label}
            to={{
              pathname: el.target,
            }}
          >
            <MenuElement
              selected={el.target === location.pathname}
              onClick={el.onClick}
            >
              {el.label}
            </MenuElement>
          </StyledLink>
        ))}
      </Menu>
      {currentUser && <LogOut onClick={handleLogout}>LOG OUT</LogOut>}
    </Header>
  )
}
