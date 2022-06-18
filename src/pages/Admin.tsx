import styled from 'styled-components'
import games from '../data/games.json'
import { useAddGameMutation } from '../generated/graphql'

type Props = {}

const Container = styled.div``

const Admin: React.FC<Props> = () => {
  const [addGame] = useAddGameMutation()
  return (
    <Container>
      <button
        onClick={() => {
          addGame({ variables: { game: { name: games[2] } } })
        }}
      >
        Seed Games
      </button>
    </Container>
  )
}

export default Admin
