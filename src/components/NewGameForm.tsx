import { useState } from 'react'
import styled from 'styled-components'
import {
  AllGamesDocument,
  AllGamesQuery,
  useAddGameMutation,
} from '../generated/graphql'

const Container = styled.div`
  border: 1px solid red;
  display: flex;
  flex-direction: column;
  max-width: 300px;
  margin: auto;
`

export const NewGameForm = () => {
  const [name, setName] = useState('')

  const [addGame] = useAddGameMutation({
    update(cache, { data }) {
      const existing = cache.readQuery<AllGamesQuery>({
        query: AllGamesDocument,
      })

      cache.writeQuery({
        query: AllGamesDocument,
        data: {
          queryGame: [
            ...(data?.addGame?.game ?? []),
            ...(existing?.queryGame ?? []),
          ],
        },
      })
    },
  })

  const submitGame = () => {
    const game = {
      name: name,
    }
    addGame({ variables: { game } })
  }

  return (
    <Container>
      <div>
        <label>Name</label>
        <input
          placeholder="Type name..."
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <button onClick={submitGame}>Add a Game</button>
    </Container>
  )
}
