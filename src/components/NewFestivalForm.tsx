import { useState } from 'react'
import styled from 'styled-components'
import {
  AllFestivalsDocument,
  AllFestivalsQuery,
  useAddFestivalMutation,
} from '../generated/graphql'

const Container = styled.div`
  border: 1px solid red;
  display: flex;
  flex-direction: column;
  max-width: 300px;
  margin: auto;
`

export const NewFestivalForm = () => {
  const [name, setName] = useState('')

  const [addFestival] = useAddFestivalMutation({
    update(cache, { data }) {
      const existing = cache.readQuery<AllFestivalsQuery>({
        query: AllFestivalsDocument,
      })

      cache.writeQuery({
        query: AllFestivalsDocument,
        data: {
          queryFestival: [
            ...(data?.addFestival?.festival ?? []),
            ...(existing?.queryFestival ?? []),
          ],
        },
      })
    },
  })

  const submitFestival = () => {
    const festival = {
      name,
    }
    addFestival({ variables: { festival } })
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
      <button onClick={submitFestival}>Add a Festival</button>
    </Container>
  )
}
