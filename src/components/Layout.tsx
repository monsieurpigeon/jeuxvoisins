import styled from 'styled-components'
import { Navigation } from './Navigation'

type Props = {
  children: any
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <Container>
      <Navigation />
      <Content>{children}</Content>
    </Container>
  )
}

const Container = styled.div`
  background-color: black;
`

const Content = styled.div`
  max-width: 800px;
  margin: auto;
`

export default Layout
