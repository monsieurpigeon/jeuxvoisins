import styled from 'styled-components'
import { useAuth } from '../contextes/auth'
import { useGetUserQuery } from '../generated/graphql'

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
  return (
    <Container>
      <h1>Profil</h1>
      <div>username: {data?.getUser?.username}</div>
      <div>email: {data?.getUser?.email}</div>
    </Container>
  )
}

export default Profile
