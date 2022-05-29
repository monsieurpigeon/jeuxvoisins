import {
  ApolloClient,
  ApolloProvider,
  createHttpLink,
  InMemoryCache,
} from '@apollo/client'
import { setContext } from '@apollo/link-context'
import React, { useContext } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import { AuthContext } from './contextes/auth'
import Login from './pages/auth/Login'
import Signup from './pages/auth/Signup'
import Conversations from './pages/Conversations'
import Games from './pages/Games'
import Home from './pages/Home'
import Neighbors from './pages/Neighbors'
import Profile from './pages/Profile'

const createApolloClient = (token: string) => {
  const httpLink = createHttpLink({
    uri: 'https://nameless-brook-330330.eu-central-1.aws.cloud.dgraph.io/graphql',
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

  return new ApolloClient({
    link: authLink.concat(httpLink as any),
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
            <Route path="/" element={<Home />} />
            <Route path="/jeux" element={<Games />} />
            <Route path="/voisins" element={<Neighbors />} />
            <Route path="/messages" element={<Conversations />} />
            <Route path="/profil" element={<Profile />} />
            <Route path="/login" element={<Login />} />
            <Route path="/sign-up" element={<Signup />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </ApolloProvider>
  )
}

export default App
