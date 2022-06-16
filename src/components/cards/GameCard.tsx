import { MdStar } from 'react-icons/md'
import styled from 'styled-components'

type Props = {
  name: string
  onClick: () => void
  selected: boolean
  favorite: boolean
}

const Container = styled.div<any>`
  position: relative;
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
const Title = styled.span`
  margin-left: 30px;
`

const Icon = styled.div`
  position: absolute;
`

export const GameCard: React.FC<Props> = ({
  name,
  onClick,
  selected,
  favorite,
}) => {
  return (
    <Container onClick={onClick} selected={selected}>
      {favorite && (
        <Icon>
          <MdStar color="yellow" />
        </Icon>
      )}
      <Title>{name}</Title>
    </Container>
  )
}
