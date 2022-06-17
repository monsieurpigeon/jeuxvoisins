import styled from 'styled-components'
import { useAuth } from '../contextes/auth'
import { useGetUserQuery, useUpdateUserMutation } from '../generated/graphql'
import { precision2 } from '../utils/numbers'

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

  const [update] = useUpdateUserMutation()

  return (
    <Container>
      <h1>Profil</h1>
      <div>username: {data?.getUser?.username}</div>
      <div>email: {data?.getUser?.email}</div>
      <button
        onClick={() => {
          navigator.geolocation.getCurrentPosition((position) => {
            update({
              variables: {
                patch: {
                  filter: { username: { eq: data?.getUser?.username || '' } },
                  set: {
                    location: {
                      latitude: precision2(position.coords.latitude),
                      longitude: precision2(position.coords.longitude),
                    },
                  },
                },
              },
            })
          })
        }}
      >
        Enregistrer ma position
      </button>
    </Container>
  )
}

export default Profile
