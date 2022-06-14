import { useReactiveVar } from '@apollo/client'
import { useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { UserCard } from '../components/cards/UserCard'
import { useAuth } from '../contextes/auth'
import { selectedState } from '../contextes/selection'
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

// Get a list of users from a set of filters
// Display a user screen on click
// navigate to /messages

const Neighbors: React.FC<Props> = () => {
  const { currentUser } = useAuth()
  const { data } = useAllUsersQuery()
  const navigate = useNavigate()

  const state = useReactiveVar(selectedState)
  const [addConversation] = useAddConversationMutation()

  const { data: me } = useGetUserQuery({
    variables: { email: currentUser?.email || '' },
  })

  const handleClick = () => {
    if (state.username && !myConversations?.includes(state.username)) {
      addConversation({
        variables: { email1: currentUser?.email || '', email2: state.username },
      }).then(() => {
        navigate('/messages')
      })
    } else {
      navigate('/messages')
    }
  }

  const closeUser = () => {
    selectedState({ username: undefined })
  }

  const myConversations = useMemo(
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
                  selectedState({
                    username:
                      user.email === state.username ? undefined : user.email,
                  })
                }
              />
            )
        )}
      </Container>
      {state.username && (
        <UserDetail>
          User: {state.username}
          <button onClick={handleClick}>Contacter</button>
          <button onClick={closeUser}>Fermer</button>
        </UserDetail>
      )}
    </>
  )
}

export default Neighbors
