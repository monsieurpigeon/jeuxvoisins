import { useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { UserCard } from '../components/cards/UserCard'
import { useAuth } from '../contextes/auth'
import { Store, useStore } from '../contextes/store'
import {
  useAddConversationMutation,
  useAllUsersQuery,
  useGetUserQuery,
} from '../generated/graphql'

type Props = {}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`

const UserDetail = styled.div`
  width: 100%;
  height: 100px;
  background-color: red;
  border-radius: 10px;
  padding: 10px;
  border: 1px solid red;
  color: white;
`

const Neighbors: React.FC<Props> = () => {
  const { currentUser } = useAuth()
  const { data } = useAllUsersQuery()
  const navigate = useNavigate()
  const { store, setStore } = useStore()

  const [addConversation] = useAddConversationMutation()

  const { data: me } = useGetUserQuery({
    variables: { email: currentUser?.email || '' },
  })

  const handleClick = async () => {
    if (store && store.username && !myConversations?.includes(store.username)) {
      await addConversation({
        variables: { email1: currentUser?.email || '', email2: store.username },
      })
    }
    navigate('/messages')
  }

  const closeUser = () => {
    setStore((store: Store) => ({ ...store, username: undefined }))
  }

  const myConversations: any = useMemo(
    () =>
      me?.getUser?.conversations?.map(
        (conversation) =>
          conversation?.users?.find(
            (user) => user?.email !== currentUser?.email
          )?.email
      ),
    [me, currentUser]
  )

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
                onClick={() =>
                  setStore((store: Store) => ({
                    ...store,
                    username:
                      user.email === store?.username ? undefined : user.email,
                  }))
                }
              />
            )
        )}
      </Container>
      {store && store.username && (
        <UserDetail>
          User: {store.username}
          <button onClick={handleClick}>Contacter</button>
          <button onClick={closeUser}>Fermer</button>
        </UserDetail>
      )}
    </>
  )
}

export default Neighbors
