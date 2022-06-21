import styled from 'styled-components'

type Props = {}

const Container = styled.div`
  color: white;
`

const Error404: React.FC<Props> = () => {
  return <Container>404 - NOT FOUND</Container>
}

export default Error404
