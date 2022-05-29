import { useMemo, useState } from 'react'
import styled from 'styled-components'
import { UserCard } from '../components/cards/UserCard'
import { UserDetail } from '../components/UserDetail'
import { useAuth } from '../contextes/auth'
import { useAllUsersQuery, useGetUserQuery } from '../generated/graphql'

type Props = {}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`

const Neighbors: React.FC<Props> = () => {
  const { currentUser } = useAuth()
  const { data } = useAllUsersQuery()
  const [selectedUser, setSelectedUser] = useState<string>()

  const { data: me } = useGetUserQuery({
    variables: { email: currentUser?.email || '' },
  })

  const myConversations = useMemo(() => {
    return me?.getUser?.conversations
      ?.map((conversation) => {
        return {
          id: conversation?.id,
          user: conversation?.users?.find((user) => {
            return user?.email !== currentUser?.email
          })?.email,
        }
      })
      .reduce((memo: any, el) => {
        memo[el.user || ''] = el.id
        return memo
      }, {})
  }, [me, currentUser])

  return (
    <>
      <Container>
        {data?.queryUser?.map(
          (user) =>
            user &&
            user.email !== currentUser?.email && (
              <UserCard
                key={user.username}
                username={user.username}
                conversationId={myConversations && myConversations[user.email]}
                onClick={() =>
                  setSelectedUser((username) =>
                    user.username === username ? undefined : user.email
                  )
                }
              />
            )
        )}
      </Container>
      {selectedUser && (
        <UserDetail
          email={selectedUser}
          conversationId={myConversations[selectedUser]}
          onClose={() => setSelectedUser(undefined)}
        />
      )}
    </>
  )
}

export default Neighbors
