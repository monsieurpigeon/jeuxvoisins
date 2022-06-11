import { useState } from 'react'
import styled from 'styled-components'
import { ConversationDetail } from '../components/ConversationDetail'
import { useAuth } from '../contextes/auth'
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

  const { data } = useMyConversationsQuery({
    variables: { email: currentUser?.email || '' },
  })

  const [selectedConversation, setSelectedConversation] = useState<any>()

  return (
    <Container>
      <div>
        {data?.getUser?.conversations?.map((conversation) => {
          return (
            conversation && (
              <UsernameContainer
                selected={selectedConversation.id === conversation.id}
                onClick={() => setSelectedConversation(conversation)}
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
