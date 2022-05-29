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
              <div onClick={() => setSelectedConversation(conversation)}>
                <h1>
                  {
                    conversation?.users?.find(
                      (user) => user?.email !== currentUser?.email
                    )?.username
                  }
                </h1>
              </div>
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
