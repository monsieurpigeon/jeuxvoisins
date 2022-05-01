import { useState } from 'react'
import styled from 'styled-components'
import {
  AllPeoplesDocument,
  AllPeoplesQuery,
  useAddPeopleMutation,
} from '../generated/graphql'

const Container = styled.div`
  border: 1px solid red;
  display: flex;
  flex-direction: column;
  max-width: 300px;
  margin: auto;
`

export const NewPeopleForm = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')

  const [addPeople] = useAddPeopleMutation({
    update(cache, { data }) {
      const existing = cache.readQuery<AllPeoplesQuery>({
        query: AllPeoplesDocument,
      })

      cache.writeQuery({
        query: AllPeoplesDocument,
        data: {
          queryPeople: [
            ...(data?.addPeople?.people ?? []),
            ...(existing?.queryPeople ?? []),
          ],
        },
      })
    },
  })

  const submitPeople = () => {
    const people = {
      firstName,
      lastName,
    }
    addPeople({ variables: { people } })
  }

  return (
    <Container>
      <div>
        <label>First Name</label>
        <input
          placeholder="Type first name..."
          onChange={(e) => setFirstName(e.target.value)}
        />
      </div>
      <div>
        <label>Last Name</label>
        <input
          placeholder="Type last name..."
          onChange={(e) => setLastName(e.target.value)}
        />
      </div>
      <button onClick={submitPeople}>Add a People</button>
    </Container>
  )
}
