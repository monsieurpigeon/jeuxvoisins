import { signInWithEmailAndPassword } from 'firebase/auth'
import React, { useCallback, useContext } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { auth } from '../../base'
import { AuthContext } from '../../contextes/auth'

const Login = () => {
  const navigate = useNavigate()
  const handleLogin = useCallback(
    async (event: any) => {
      event.preventDefault()
      const { email, password } = event.target.elements
      try {
        await signInWithEmailAndPassword(auth, email.value, password.value)
        navigate('/')
      } catch (error) {
        alert(error)
      }
    },
    [navigate]
  )

  const { currentUser } = useContext(AuthContext)

  if (currentUser) {
    return <Navigate to="/" />
  }

  return (
    <div>
      <h1>Log in</h1>
      <form onSubmit={handleLogin}>
        <label>
          Email
          <input name="email" type="email" placeholder="Email" />
        </label>
        <label>
          Password
          <input name="password" type="password" placeholder="Password" />
        </label>
        <button type="submit">Log in</button>
      </form>
      <span className="input-group-btn">
        <Link to="/sign-up">Click to Sign Up</Link>
      </span>
    </div>
  )
}

export default Login
