import { Link, useParams } from 'react-router-dom'
import styled from 'styled-components'
import { useGetPeopleQuery } from '../generated/graphql'

const Container = styled.div``

export const People = () => {
  const { id } = useParams()
  const { data } = useGetPeopleQuery({
    variables: { id: id || '' },
  })
  return (
    <Container>
      <h1>{`${data?.getPeople?.firstName} ${data?.getPeople?.lastName}`}</h1>
      <div>
        <h2>Author</h2>
        <div>
          {data?.getPeople?.gameAuthor?.map((game) => {
            return (
              <Link
                to={{
                  pathname: `/game/` + game?.id,
                }}
              >
                <div>{game?.name}</div>
              </Link>
            )
          })}
        </div>
      </div>

      <div>
        <h2>Illustrator</h2>
        <div>
          {data?.getPeople?.gameIllustrator?.map((game) => {
            return (
              <Link
                to={{
                  pathname: `/game/` + game?.id,
                }}
              >
                <div>{game?.name}</div>
              </Link>
            )
          })}
        </div>
      </div>
    </Container>
  )
}
