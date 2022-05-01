import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import { useGetCompanyQuery } from '../generated/graphql'

const Container = styled.div``

export const Company = () => {
  const { id } = useParams()
  const { data } = useGetCompanyQuery({
    variables: { id: id || '' },
  })
  return (
    <Container>
      <h1>{data?.getCompany?.name}</h1>
    </Container>
  )
}
