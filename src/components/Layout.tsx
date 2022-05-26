import styled from 'styled-components'
import { Navigation } from './Navigation'

type Props = {
  children: any
}

const Container = styled.div`
  background-color: black;
  width: 100vw;
  height: 100vh;
`

const Content = styled.div`
  max-width: 800px;
  margin: auto;
`

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <Container>
      <Navigation />
      <Content>{children}</Content>
    </Container>
  )
}

export default Layout
