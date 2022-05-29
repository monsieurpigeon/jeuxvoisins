import 'firebase/functions'
import { getFunctions, httpsCallable } from 'firebase/functions'
import React, { useContext, useEffect, useState } from 'react'
import App from '../App'
import { auth } from '../base'

interface User {
  email: string
  username: string
}

export const AuthContext = React.createContext({
  loading: true,
  currentUser: null as User | null,
})

export const AuthProvider = ({ children }: any) => {
  const [currentUser, setCurrentUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const [idToken, setIdToken] = useState('')

  const functions = getFunctions()
  const addUserClaim = httpsCallable(functions, 'addUserClaim')

  useEffect(() => {
    auth.onAuthStateChanged(async (user: any) => {
      setLoading(false)
      setCurrentUser(user)
      if (user) {
        addUserClaim({ email: user.email })
        const token = await user.getIdToken()
        setIdToken(token)
      }
    })
  }, [addUserClaim])

  if (loading) {
    return <>Loading...</>
  }

  return (
    <AuthContext.Provider
      value={{
        loading,
        currentUser,
      }}
    >
      {children}
      <App idToken={idToken} />
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const auth = useContext(AuthContext)
  return auth
}
