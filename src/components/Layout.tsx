import styled from 'styled-components'
import { Navigation } from './Navigation'

type Props = {
  children: any
}

const Container = styled.div`
  background-color: aqua;
  width: 100vw;
  height: 100vh;
`

const Content = styled.div`
  max-width: 800px;
  margin: auto;
`

export const Layout: React.FC<Props> = ({ children }) => {
  return (
    <Container>
      <Navigation />
      <Content>{children}</Content>
    </Container>
  )
}
