import { useState } from 'react'
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
  const { data } = useAllGamesQuery()
  const [selectedGameId, setSelectedGameId] = useState<string>()
  return (
    <Container>
      {data?.queryGame?.map(
        (game) =>
          game && (
            <GameCard
              key={game.id}
              name={game.name}
              selected={game.id === selectedGameId}
              onClick={() => {
                setSelectedGameId((id) =>
                  id === game.id ? undefined : game.id
                )
              }}
            ></GameCard>
          )
      )}
    </Container>
  )
}

export default Games
