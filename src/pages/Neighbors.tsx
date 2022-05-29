import { useState } from 'react'
import styled from 'styled-components'
import { UserCard } from '../components/cards/UserCard'
import { UserDetail } from '../components/UserDetail'
import { useAllUsersQuery } from '../generated/graphql'

type Props = {}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`

const Neighbors: React.FC<Props> = () => {
  const { data } = useAllUsersQuery()
  const [selectedUser, setSelectedUser] = useState<string>()
  return (
    <>
      <Container>
        {data?.queryUser?.map(
          (user) =>
            user && (
              <UserCard
                key={user.username}
                username={user.username}
                onClick={() =>
                  setSelectedUser((username) =>
                    user.username === username ? undefined : user.username
                  )
                }
              ></UserCard>
            )
        )}
      </Container>
      {selectedUser && (
        <UserDetail
          username={selectedUser}
          onClose={() => setSelectedUser(undefined)}
        />
      )}
    </>
  )
}

export default Neighbors
