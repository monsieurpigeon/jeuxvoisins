import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import styled from 'styled-components'
import {
  useAllPeoplesQuery,
  useGetGameQuery,
  useUpdateGameMutation,
} from '../generated/graphql'

const Container = styled.div``

export const Game = () => {
  const { id } = useParams()
  const { data } = useGetGameQuery({
    variables: { id: id || '' },
  })

  const [authorUpdate, setAuthorUpdate] = useState(false)
  const [illustratorUpdate, setIllustratorUpdate] = useState(false)

  const { data: peoples } = useAllPeoplesQuery()

  const [updateGame] = useUpdateGameMutation()
  // const [addAuthor] = useAddGameMutation({
  //   update(cache, { data }) {
  //     const existing = cache.readQuery<AllGamesQuery>({
  //       query: AllGamesDocument,
  //     })

  //     cache.writeQuery({
  //       query: AllGamesDocument,
  //       data: {
  //         queryGame: [
  //           ...(data?.addGame?.game ?? []),
  //           ...(existing?.queryGame ?? []),
  //         ],
  //       },
  //     })
  //   },
  // })

  return (
    <Container>
      <h1>{data?.getGame?.name}</h1>
      <div>
        <div>
          <h2
            onClick={() => {
              setAuthorUpdate((v) => !v)
            }}
          >
            Authors
          </h2>
          {!authorUpdate && (
            <div>
              {data?.getGame?.authors?.map((author) => {
                return (
                  <Link
                    to={{
                      pathname: `/people/` + author?.id,
                    }}
                  >
                    <div>{`${author?.firstName} ${author?.lastName}`}</div>
                  </Link>
                )
              })}
            </div>
          )}
          {authorUpdate && (
            <div>
              <div>
                {data?.getGame?.authors?.map((author) => {
                  return (
                    <div
                      onClick={() => {
                        console.log(author)
                        setAuthorUpdate(false)
                        updateGame({
                          variables: {
                            patch: {
                              filter: {
                                id: [data?.getGame?.id || ''],
                              },
                              remove: {
                                authors: [{ id: author?.id }],
                              },
                            },
                          },
                        })
                      }}
                    >{`${author?.firstName} ${author?.lastName}`}</div>
                  )
                })}
              </div>
              <div>
                <h3>All people</h3>
                {peoples?.queryPeople?.map((people) => {
                  return (
                    <div
                      onClick={() => {
                        console.log(people)
                        setAuthorUpdate(false)
                        updateGame({
                          variables: {
                            patch: {
                              filter: {
                                id: [data?.getGame?.id || ''],
                              },
                              set: {
                                authors: [{ id: people?.id }],
                              },
                            },
                          },
                        })
                      }}
                    >
                      {people?.firstName} {people?.lastName}
                    </div>
                  )
                })}
              </div>
            </div>
          )}
        </div>
      </div>
      <div>
        <div>
          <h2
            onClick={() => {
              setIllustratorUpdate((v) => !v)
            }}
          >
            Illustrators
          </h2>
          {!illustratorUpdate && (
            <div>
              {data?.getGame?.illustrators?.map((illustrator) => {
                return (
                  <Link
                    to={{
                      pathname: `/people/` + illustrator?.id,
                    }}
                  >
                    <div>{`${illustrator?.firstName} ${illustrator?.lastName}`}</div>
                  </Link>
                )
              })}
            </div>
          )}
          {illustratorUpdate && (
            <div>
              <div>
                {data?.getGame?.illustrators?.map((illustrator) => {
                  return (
                    <div
                      onClick={() => {
                        console.log(illustrator)
                        updateGame({
                          variables: {
                            patch: {
                              filter: {
                                id: [data?.getGame?.id || ''],
                              },
                              remove: {
                                illustrators: [{ id: illustrator?.id }],
                              },
                            },
                          },
                        })
                      }}
                    >{`${illustrator?.firstName} ${illustrator?.lastName}`}</div>
                  )
                })}
              </div>
              <div>
                <h3>All people</h3>
                {peoples?.queryPeople?.map((people) => {
                  return (
                    <div
                      onClick={() => {
                        console.log(people)
                        updateGame({
                          variables: {
                            patch: {
                              filter: {
                                id: [data?.getGame?.id || ''],
                              },
                              set: {
                                illustrators: [{ id: people?.id }],
                              },
                            },
                          },
                        })
                      }}
                    >
                      {people?.firstName} {people?.lastName}
                    </div>
                  )
                })}
              </div>
            </div>
          )}
        </div>
      </div>
    </Container>
  )
}
