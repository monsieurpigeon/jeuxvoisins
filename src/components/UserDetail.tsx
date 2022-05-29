import styled from 'styled-components'
import { useAuth } from '../contextes/auth'
import { useAddConversationMutation } from '../generated/graphql'

type Props = { email: string; onClose: () => void; conversationId?: string }

const Container = styled.div`
  width: 100%;
  height: 100px;
  background-color: red;
  border-radius: 10px;
  padding: 10px;
  border: 1px solid red;
  color: white;
`

export const UserDetail: React.FC<Props> = ({
  email,
  conversationId,
  onClose,
}) => {
  const [addConversation] = useAddConversationMutation()
  const { currentUser } = useAuth()
  console.log(conversationId, currentUser?.email, email)

  return (
    <Container>
      User: {email}
      <button
        onClick={() => {
          if (!conversationId) {
            addConversation({
              variables: { email1: currentUser?.email || '', email2: email },
            })
          }
        }}
      >
        Contacter
      </button>
      <button onClick={onClose}>Fermer</button>
    </Container>
  )
}
