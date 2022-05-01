import styled from 'styled-components'
import { List } from '../components/List'
import { ListElement } from '../components/ListElement'
import { NewGameForm } from '../components/NewGameForm'
import { useAllGamesQuery } from '../generated/graphql'

const Container = styled.div``

export const Games = () => {
  const { data } = useAllGamesQuery()

  return (
    <Container>
      <NewGameForm />
      <List>
        {data?.queryGame?.map((game) => (
          <ListElement
            key={game?.id}
            id={game?.id || ''}
            display={game?.name || ''}
            target="game"
          />
        ))}
      </List>
    </Container>
  )
}
