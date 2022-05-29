import { useState } from 'react'
import styled from 'styled-components'
import { useAuth } from '../contextes/auth'
import { useAddMessageMutation } from '../generated/graphql'

type Props = { conversation: any }

const Container = styled.div`
  color: white;
`

export const ConversationDetail: React.FC<Props> = ({ conversation }) => {
  const { currentUser } = useAuth()

  const [message, setMessage] = useState('')
  const [addMessage] = useAddMessageMutation()

  const onSend = (conversationId: string) => {
    addMessage({
      variables: {
        message: {
          content: message,
          author: { email: currentUser?.email || '' },
          conversation: { id: conversationId },
        },
      },
    })
  }

  return (
    <Container>
      Conversation: {conversation.id}
      <div>
        {conversation.users?.map((user: any) => {
          return user && <div>{user.username}</div>
        })}
      </div>
      <div>
        {conversation.messages?.map((message: any) => {
          return (
            message && (
              <div>
                {message.author.username} : {message.content}
              </div>
            )
          )
        })}
      </div>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button onClick={() => onSend(conversation.id)}>Envoyer</button>
    </Container>
  )
}
