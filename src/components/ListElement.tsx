import { Link } from 'react-router-dom'
import styled from 'styled-components'

const GameListElement = styled.div`
  text-decoration: none;
  background-color: yellow;
  padding: 10px;
  &:hover {
    background-color: #d5d514;
  }
`

type Props = { id: string; display: string; target: string }

export const ListElement: React.FC<Props> = ({ id, display, target }) => {
  return (
    <Link
      to={{
        pathname: `/${target}/` + id,
      }}
    >
      <GameListElement>{display}</GameListElement>
    </Link>
  )
}
