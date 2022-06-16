import { useState } from 'react'
import styled from 'styled-components'
import { GameCard } from '../components/cards/GameCard'
import { useAuth } from '../contextes/auth'
import {
  useAddFavoriteGameMutation,
  useAllGamesQuery,
  useGetUserQuery,
  useRemoveFavoriteGameMutation,
} from '../generated/graphql'

interface Game {
  id: string
  name: string
}

type Props = {}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`

const GameDetail = styled.div`
  background-color: yellow;
`

const Games: React.FC<Props> = () => {
  const { data } = useAllGamesQuery()
  const { currentUser } = useAuth()
  const [addFavorite] = useAddFavoriteGameMutation()
  const [removeFavorite] = useRemoveFavoriteGameMutation()
  const [selectedGame, setSelectedGame] = useState<Game>()

  const { data: me } = useGetUserQuery({
    variables: { email: currentUser?.email || '' },
  })

  const onRemoveFavorite = () => {
    removeFavorite({
      variables: {
        email: currentUser?.email || '',
        gameId: selectedGame?.id || '',
      },
    })
  }

  const onAddFavorite = () => {
    addFavorite({
      variables: {
        email: currentUser?.email || '',
        gameId: selectedGame?.id || '',
      },
    })
  }

  const myFavorites = me?.getUser?.games?.map((game) => game?.id)

  return (
    <Container>
      {data?.queryGame?.map(
        (game) =>
          game && (
            <GameCard
              key={game.id}
              name={game.name}
              selected={game.id === selectedGame?.id}
              favorite={!!myFavorites?.includes(game.id)}
              onClick={() => {
                setSelectedGame((selectedGame) =>
                  selectedGame?.id === game.id ? undefined : game
                )
              }}
            />
          )
      )}
      {selectedGame && (
        <GameDetail>
          <h1>{selectedGame.name}</h1>
          <p>Bla bla bla bla</p>
          <button
            onClick={() => {
              myFavorites?.includes(selectedGame.id)
                ? onRemoveFavorite()
                : onAddFavorite()
            }}
          >
            {myFavorites?.includes(selectedGame.id)
              ? 'Retirer des favoris'
              : 'Ajouter au favoris'}
          </button>
        </GameDetail>
      )}
    </Container>
  )
}

export default Games
