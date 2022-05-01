import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 500px;
  margin: auto;
`

type Prop = { children: any }

export const List: React.FC<Prop> = ({ children }) => {
  return <Container>{children}</Container>
}
