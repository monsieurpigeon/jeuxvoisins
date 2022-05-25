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

const menuElements = [
  { label: 'Accueil', target: '/' },
  { label: 'Jeux', target: '/jeux' },
  { label: 'Voisins', target: '/voisins' },
  { label: 'Messages', target: '/messages' },
  { label: 'Profil', target: '/profil' },
]

export const Navigation = () => {
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
    </Menu>
  )
}
