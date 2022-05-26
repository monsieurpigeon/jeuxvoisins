import styled from 'styled-components'
import { GameCard } from '../components/cards/GameCard'
import { useAllGamesQuery } from '../generated/graphql'

type Props = {}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`

const Games: React.FC<Props> = () => {
  const { data, error, loading } = useAllGamesQuery()
  return (
    <Container>
      {data?.queryGame?.map(
        (game) => game && <GameCard name={game.name}></GameCard>
      )}
    </Container>
  )
}

export default Games
