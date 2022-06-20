import { getAuth, signOut } from 'firebase/auth'
import JSConfetti from 'js-confetti'
import { useState } from 'react'
import { MdStoreMallDirectory } from 'react-icons/md'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { useAuth } from '../contextes/auth'
import useOnClickOutsideRef from '../hooks/useClickOutside'
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

const MenuElement = styled.li<MenuElementProps>`
  display: block;
  padding: 10px;
  box-sizing: border-box;
  &:hover {
    background-color: yellow;
    color: black;
  }
  box-shadow: ${(p) => (p.selected ? 'inset 0 -2px 0 yellow' : 'none')};
`

const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
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
]

const adminMenuElements = [
  { label: 'Admin', target: '/admin', onClick: () => null },
]

export const Navigation = () => {
  const auth = getAuth()
  const location = useLocation()
  const { currentUser } = useAuth()
  const navigate = useNavigate()
  const [showProfile, setShowProfile] = useState(false)
  const modalRef = useOnClickOutsideRef(() => {
    setShowProfile(false)
  })

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
      {currentUser && (
        <div
          ref={modalRef}
          onClick={() => {
            setShowProfile((s) => !s)
          }}
        >
          <MdStoreMallDirectory color="white" />

          {showProfile && (
            <ListModal>
              <StyledLink to={{ pathname: '/profil' }}>
                <ListModalElement>Profil</ListModalElement>
              </StyledLink>
              <ListModalElement onClick={handleLogout}>
                Déconnexion
              </ListModalElement>
            </ListModal>
          )}
        </div>
      )}
    </Header>
  )
}

const ListModal = styled.div`
  position: absolute;
  width: 100px;
  right: 0;
`

const ListModalElement = styled.div`
  color: white;
  background-color: grey;
  cursor: pointer;
  padding: 10px;
  border-radius: 10px;
  border-right: 5px solid yellow;
  &:hover {
    border-right: 10px solid yellow;
  }
`
