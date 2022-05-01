import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import { useGetGameQuery } from '../generated/graphql'

const Container = styled.div``

export const Game = () => {
  const { id } = useParams()
  const { data } = useGetGameQuery({
    variables: { id: id || '' },
  })
  return (
    <Container>
      <h1>{data?.getGame?.name}</h1>
    </Container>
  )
}
