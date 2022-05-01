import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import { useGetPeopleQuery } from '../generated/graphql'

const Container = styled.div``

export const People = () => {
  const { id } = useParams()
  const { data } = useGetPeopleQuery({
    variables: { id: id || '' },
  })
  return (
    <Container>
      <h1>{`${data?.getPeople?.firstName} ${data?.getPeople?.lastName}`}</h1>
    </Container>
  )
}
