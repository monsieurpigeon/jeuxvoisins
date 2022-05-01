import styled from 'styled-components'
import { List } from '../components/List'
import { ListElement } from '../components/ListElement'
import { NewCompanyForm } from '../components/NewCompanyForm'
import { useAllCompaniesQuery } from '../generated/graphql'

const Container = styled.div``

export const Companies = () => {
  const { data } = useAllCompaniesQuery()

  return (
    <Container>
      <NewCompanyForm />
      <List>
        {data?.queryCompany?.map((company) => {
          return (
            <ListElement
              key={company?.id}
              id={company?.id || ''}
              display={company?.name || ''}
              target="company"
            />
          )
        })}
      </List>
    </Container>
  )
}
