import styled from 'styled-components'

type Props = {}

const Container = styled.div`
  background-color: white;
`

const TextContainer = styled.p`
  background-color: ${(p) => p.color};
  padding: 5px;
`

const Home: React.FC<Props> = () => {
  return (
    <Container>
      <h1>Présentation</h1>
      <TextContainer color={'lightgrey'}>
        Ceci est un projet en cours pour réunir des fans de jeux de société
      </TextContainer>
      <TextContainer color={'salmon'}>
        Vous pourrez y rencontrer vos voisins qui jouent aux mêmes jeux que
        vous.
      </TextContainer>
      <TextContainer color={'lightblue'}>
        Retrouvez le repository du projet{' '}
        <a
          href="https://github.com/monsieurpigeon/jeuxdesociete"
          target="_blank"
          rel="noreferrer"
        >
          ICI
        </a>
      </TextContainer>
      <TextContainer color={'lightgreen'}>
        Suivez moi en{' '}
        <a
          href="https://www.twitch.tv/maxpige"
          target="_blank"
          rel="noreferrer"
        >
          live sur twitch
        </a>{' '}
        pour assister au développement de l'application
      </TextContainer>
      Vive Modez
    </Container>
  )
}

export default Home
