import styled from 'styled-components'
import { List } from '../components/List'
import { ListElement } from '../components/ListElement'
import { NewPeopleForm } from '../components/NewPeopleForm'
import { useAllPeoplesQuery } from '../generated/graphql'

const Container = styled.div``

export const Peoples = () => {
  const { data } = useAllPeoplesQuery()

  return (
    <Container>
      <NewPeopleForm />
      <List>
        {data?.queryPeople?.map((people) => {
          return (
            <ListElement
              key={people?.id}
              id={people?.id || ''}
              display={`${people?.firstName} ${people?.lastName}`}
              target="people"
            />
          )
        })}
      </List>
    </Container>
  )
}
