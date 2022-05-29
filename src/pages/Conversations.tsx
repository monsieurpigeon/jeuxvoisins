import { useState } from 'react'
import styled from 'styled-components'
import { ConversationDetail } from '../components/ConversationDetail'
import { useAuth } from '../contextes/auth'
import { useMyConversationsQuery } from '../generated/graphql'

type Props = {}

const Container = styled.div`
  color: white;
`

const Conversations: React.FC<Props> = () => {
  const { currentUser } = useAuth()

  const { data } = useMyConversationsQuery({
    variables: { email: currentUser?.email || '' },
  })

  const [selectedConversation, setSelectedConversation] = useState<any>()

  return (
    <Container>
      <div> Conversations</div>
      {data?.getUser?.conversations?.map((conversation) => {
        return (
          conversation && (
            <div onClick={() => setSelectedConversation(conversation)}>
              <h1>{conversation.id}</h1>
            </div>
          )
        )
      })}
      {selectedConversation && (
        <ConversationDetail conversation={selectedConversation} />
      )}
    </Container>
  )
}

export default Conversations
