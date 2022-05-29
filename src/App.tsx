import {
  ApolloClient,
  ApolloProvider,
  createHttpLink,
  InMemoryCache,
  split,
} from '@apollo/client'
import { WebSocketLink } from '@apollo/client/link/ws'
import { getMainDefinition } from '@apollo/client/utilities'
import { setContext } from '@apollo/link-context'
import React, { useContext } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import { ProtectedRoute } from './components/PrivateRoute'
import { AuthContext } from './contextes/auth'
import Login from './pages/auth/Login'
import Signup from './pages/auth/Signup'
import Conversations from './pages/Conversations'
import Games from './pages/Games'
import Home from './pages/Home'
import Neighbors from './pages/Neighbors'
import Profile from './pages/Profile'

const createApolloClient = (token: string) => {
  const endpoint =
    'nameless-brook-330330.eu-central-1.aws.cloud.dgraph.io/graphql'

  const httpLink = createHttpLink({
    uri: `https://${endpoint}`,
  })

  const wsLink = new WebSocketLink({
    uri: `wss://${endpoint}`,
    options: {
      reconnect: true,
    },
  })

  const authLink = setContext((_, { headers }) => {
    // return the headers to the context so httpLink can read them
    return {
      headers: {
        ...headers,
        'X-Auth-Token': token,
      },
    }
  })

  const link = split(
    // split based on operation type
    ({ query }) => {
      const definition = getMainDefinition(query)
      return (
        definition.kind === 'OperationDefinition' &&
        definition.operation === 'subscription'
      )
    },
    wsLink,
    httpLink
  )

  return new ApolloClient({
    link: authLink.concat(link),
    cache: new InMemoryCache(),
  } as any)
}

function App({ idToken }: any) {
  const { loading } = useContext(AuthContext)
  if (loading) {
    return <div>Loading...</div>
  }
  const client = createApolloClient(idToken)
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route
              path="/"
              element={
                <ProtectedRoute>
                  <Home />
                </ProtectedRoute>
              }
            />
            <Route
              path="/jeux"
              element={
                <ProtectedRoute>
                  <Games />
                </ProtectedRoute>
              }
            />
            <Route
              path="/voisins"
              element={
                <ProtectedRoute>
                  <Neighbors />
                </ProtectedRoute>
              }
            />
            <Route
              path="/messages"
              element={
                <ProtectedRoute>
                  <Conversations />
                </ProtectedRoute>
              }
            />
            <Route
              path="/profil"
              element={
                <ProtectedRoute>
                  <Profile />
                </ProtectedRoute>
              }
            />
            <Route path="/login" element={<Login />} />
            <Route path="/sign-up" element={<Signup />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </ApolloProvider>
  )
}

export default App
