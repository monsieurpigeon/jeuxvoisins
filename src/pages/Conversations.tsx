import { useState } from 'react'
import styled from 'styled-components'
import { useAuth } from '../contextes/auth'
import {
  useAddMessageMutation,
  useAllConversationsQuery,
} from '../generated/graphql'

type Props = {}

const Container = styled.div`
  color: white;
`

const Conversations: React.FC<Props> = () => {
  const { data } = useAllConversationsQuery()
  console.log(data)

  const [message, setMessage] = useState('')
  const [addMessage] = useAddMessageMutation()
  const { currentUser } = useAuth()

  const onSend = (conversationId: string) => {
    console.log(message)
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
      <div> Conversations</div>
      {data?.queryConversation?.map((conversation) => {
        return (
          conversation && (
            <div>
              <h1>{conversation.id}</h1>
              <div>
                {conversation.users?.map((user) => {
                  return user && <div>{user.username}</div>
                })}
              </div>
              <div>
                {conversation.messages?.map((message) => {
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
            </div>
          )
        )
      })}
    </Container>
  )
}

export default Conversations
