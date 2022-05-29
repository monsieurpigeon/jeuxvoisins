import { getAuth, signOut } from 'firebase/auth'
import { Link, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { useAuth } from '../contextes/auth'

const Menu = styled.ul`
  padding: 0;
  margin: 0;
  display: flex;
  gap: 10px;
`

const MenuElement = styled.li`
  display: block;
`

const Container = styled.div`
  color: white;
`

const LogOut = styled.div`
  color: white;
  cursor: pointer;
`

const menuElements = [
  { label: 'Accueil', target: '/' },
  { label: 'Jeux', target: '/jeux' },
  { label: 'Voisins', target: '/voisins' },
  { label: 'Messages', target: '/messages' },
  { label: 'Profil', target: '/profil' },
]

export const Navigation = () => {
  const auth = getAuth()
  const { currentUser } = useAuth()
  const navigate = useNavigate()

  const handleLogout = () => {
    signOut(auth).then(() => {
      navigate('/')
    })
  }
  return (
    <Menu>
      {menuElements.map((el) => {
        return (
          <Link
            key={el.label}
            to={{
              pathname: el.target,
            }}
          >
            <MenuElement>{el.label}</MenuElement>
          </Link>
        )
      })}
      <LogOut onClick={handleLogout}>LOG OUT</LogOut>
      <Container>Je suis : {currentUser?.email}</Container>
    </Menu>
  )
}
