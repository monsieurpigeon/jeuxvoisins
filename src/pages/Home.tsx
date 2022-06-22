import styled from 'styled-components'
import { Journal } from '../components/journal/Journal'

type Props = {}

const Container = styled.div`
  color: white;
`

const Home: React.FC<Props> = () => {
  return (
    <Container>
      <h1>Présentation</h1>
      <p>Ceci est un projet en cours pour réunir des fans de jeux de société</p>
      <p>
        Vous pourrez y rencontrer vos voisins qui jouent aux mêmes jeux que
        vous.
      </p>
      <p>
        Retrouvez le repository du projet{' '}
        <a
          href="https://github.com/monsieurpigeon/jeuxvoisins"
          target="_blank"
          rel="noreferrer"
        >
          ICI
        </a>
      </p>
      <p>
        Suivez moi en{' '}
        <a
          href="https://www.twitch.tv/maxpige"
          target="_blank"
          rel="noreferrer"
        >
          live sur twitch
        </a>{' '}
        pour assister au développement de l'application tous les soirs de 19h à
        21h
      </p>
      Vive Modez
      <Journal />
    </Container>
  )
}

export default Home
