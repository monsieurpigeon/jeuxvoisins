import styled from 'styled-components'

type Props = { name: string }

const Container = styled.div`
  width: 300px;
  background-color: black;
  border-radius: 10px;
  padding: 10px;
  border: 1px solid blue;
  color: white;
  user-select: none;
  cursor: pointer;
  &:hover {
    background-color: darkblue;
  }
`

export const GameCard: React.FC<Props> = ({ name }) => {
  return <Container>{name}</Container>
}
