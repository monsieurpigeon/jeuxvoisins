import styled from 'styled-components'
import { List } from '../components/List'
import { ListElement } from '../components/ListElement'
import { NewFestivalForm } from '../components/NewFestivalForm'
import { useAllFestivalsQuery } from '../generated/graphql'

const Container = styled.div``

export const Festivals = () => {
  const { data } = useAllFestivalsQuery()

  return (
    <Container>
      <NewFestivalForm />
      <List>
        {data?.queryFestival?.map((festival) => {
          return (
            <ListElement
              key={festival?.id}
              id={festival?.id || ''}
              display={festival?.name || ''}
              target="festival"
            />
          )
        })}
      </List>
    </Container>
  )
}
