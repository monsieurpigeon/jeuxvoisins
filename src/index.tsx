import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import {
  ApolloClient,
  ApolloProvider,
  createHttpLink,
  InMemoryCache,
} from '@apollo/client'

const createApolloClient = () => {
  const httpLink = createHttpLink({
    uri: 'https://nameless-brook-330330.eu-central-1.aws.cloud.dgraph.io/graphql',
  })

  return new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache(),
  })
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <ApolloProvider client={createApolloClient()}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ApolloProvider>
)
