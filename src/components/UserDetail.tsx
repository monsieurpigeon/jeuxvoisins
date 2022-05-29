import styled from 'styled-components'

type Props = { username: string; onClose: () => void }

const Container = styled.div`
  width: 100%;
  height: 100px;
  background-color: red;
  border-radius: 10px;
  padding: 10px;
  border: 1px solid red;
  color: white;
`

export const UserDetail: React.FC<Props> = ({ username, onClose }) => {
  return (
    <Container>
      User: {username}
      <button>Contacter</button>
      <button onClick={onClose}>Fermer</button>
    </Container>
  )
}
