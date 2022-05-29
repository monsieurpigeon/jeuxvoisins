import styled from 'styled-components'
import { useAuth } from '../contextes/auth'
import { useGetUserQuery } from '../generated/graphql'

type Props = {}

const Container = styled.div`
  color: white;
`

const Profile: React.FC<Props> = () => {
  const { currentUser } = useAuth()
  const { data } = useGetUserQuery({
    variables: { email: currentUser?.email || '' },
  })
  return <Container> Profile : {data?.getUser?.username}</Container>
}

export default Profile
