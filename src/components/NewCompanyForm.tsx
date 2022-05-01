import { useState } from 'react'
import styled from 'styled-components'
import {
  AllCompaniesDocument,
  AllCompaniesQuery,
  useAddCompanyMutation,
} from '../generated/graphql'

const Container = styled.div`
  border: 1px solid red;
  display: flex;
  flex-direction: column;
  max-width: 300px;
  margin: auto;
`

export const NewCompanyForm = () => {
  const [name, setName] = useState('')

  const [addCompany] = useAddCompanyMutation({
    update(cache, { data }) {
      const existing = cache.readQuery<AllCompaniesQuery>({
        query: AllCompaniesDocument,
      })

      cache.writeQuery({
        query: AllCompaniesDocument,
        data: {
          queryCompany: [
            ...(data?.addCompany?.company ?? []),
            ...(existing?.queryCompany ?? []),
          ],
        },
      })
    },
  })

  const submitCompany = () => {
    const company = {
      name,
    }
    addCompany({ variables: { company } })
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
      <button onClick={submitCompany}>Add a Company</button>
    </Container>
  )
}
