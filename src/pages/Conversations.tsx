import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { ConversationDetail } from '../components/ConversationDetail'
import { useAuth } from '../contextes/auth'
import { Store, useStore } from '../contextes/store'
import { useMyConversationsQuery } from '../generated/graphql'

type Props = {}

const Container = styled.div`
  display: flex;
  color: white;
`

const UsernameContainer = styled.div<{ selected: boolean }>`
  border: 1px solid red;
  padding: 10px;
  ${(props) => (props.selected ? 'background-color: blue;' : null)}
  &:hover {
    background-color: red;
  }
`

const ConversationContainer = styled.div`
  padding: 20px;
`

const Conversations: React.FC<Props> = () => {
  const { currentUser } = useAuth()
  const { store, setStore } = useStore()

  const { data, loading } = useMyConversationsQuery({
    variables: { email: currentUser?.email || '' },
    fetchPolicy: 'network-only',
  })

  const [selectedConversation, setSelectedConversation] = useState<any>()

  useEffect(() => {
    if (store && store.username) {
      setSelectedConversation(
        data?.getUser?.conversations?.find((conversation) =>
          conversation?.users
            ?.map((user) => user?.email)
            .includes(store.username)
        )
      )
    }
  }, [store, data])

  return (
    <Container>
      <div>
        {!loading &&
          data?.getUser?.conversations?.map((conversation) => {
            return (
              conversation && (
                <UsernameContainer
                  selected={selectedConversation?.id === conversation.id}
                  onClick={() =>
                    setStore((store: Store) => ({
                      ...store,
                      username: conversation?.users?.find(
                        (user) => user?.email !== currentUser?.email
                      )?.email,
                    }))
                  }
                  key={conversation.id}
                >
                  <h1>
                    {
                      conversation?.users?.find(
                        (user) => user?.email !== currentUser?.email
                      )?.username
                    }
                  </h1>
                </UsernameContainer>
              )
            )
          })}
      </div>
      <ConversationContainer>
        {selectedConversation && (
          <ConversationDetail conversation={selectedConversation} />
        )}
      </ConversationContainer>
    </Container>
  )
}

export default Conversations
