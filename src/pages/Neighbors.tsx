import styled from 'styled-components'
import { UserCard } from '../components/cards/UserCard'
import { useAllUsersQuery } from '../generated/graphql'

type Props = {}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`

const Neighbors: React.FC<Props> = () => {
  const { data } = useAllUsersQuery()
  return (
    <Container>
      {data?.queryUser?.map(
        (user) =>
          user && (
            <UserCard key={user.username} username={user.username}></UserCard>
          )
      )}
    </Container>
  )
}

export default Neighbors
