import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import { useGetFestivalQuery } from '../generated/graphql'

const Container = styled.div``

export const Festival = () => {
  const { id } = useParams()
  const { data } = useGetFestivalQuery({
    variables: { id: id || '' },
  })
  return (
    <Container>
      <h1>{data?.getFestival?.name}</h1>
    </Container>
  )
}
