import styled from 'styled-components'

type Props = { name: string; onClick: () => void; selected: boolean }

const Container = styled.div<any>`
  width: 300px;
  border-radius: 10px;
  background-color: ${(props) => (props.selected ? 'blue' : 'black')};
  padding: 10px;
  border: 1px solid blue;
  color: white;
  user-select: none;
  cursor: pointer;
  &:hover {
    background-color: ${(props) => (props.selected ? 'blue' : 'darkblue')};
  }
`

export const GameCard: React.FC<Props> = ({ name, onClick, selected }) => {
  return (
    <Container onClick={onClick} selected={selected}>
      {name}
    </Container>
  )
}
