import { useState } from 'react'
import styled from 'styled-components'
import { useAuth } from '../contextes/auth'
import { useGetUserQuery, useUpdateUserMutation } from '../generated/graphql'

type Props = {}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  color: white;
`

const Profile: React.FC<Props> = () => {
  const { currentUser } = useAuth()
  const { data } = useGetUserQuery({
    variables: { email: currentUser?.email || '' },
  })
  const [zipCode, setZipCode] = useState('')

  const [update] = useUpdateUserMutation()

  return (
    <Container>
      <h1>Profil</h1>
      <div>username: {data?.getUser?.username}</div>
      <div>email: {data?.getUser?.email}</div>
      <div>code postal: {data?.getUser?.zipCode}</div>
      <input
        type="text"
        value={zipCode}
        onChange={(e) => setZipCode(e.target.value)}
      />
      <button
        onClick={() => {
          update({
            variables: {
              patch: {
                filter: { username: { eq: data?.getUser?.username || '' } },
                set: { zipCode: zipCode },
              },
            },
          })
        }}
      >
        Enregistrer le code postal
      </button>
    </Container>
  )
}

export default Profile
