import styled from 'styled-components'

type Props = {}

const Container = styled.div`
  width: 100px;
  height: 100px;
  background-color: red;
  border-radius: 10px;
  padding: 10px;
  border: 1px solid red;
  color: white;
`

export const UserCard: React.FC<Props> = () => {
  return <Container>UserCard</Container>
}
