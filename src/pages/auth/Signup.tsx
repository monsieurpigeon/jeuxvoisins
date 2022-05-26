import { createUserWithEmailAndPassword } from 'firebase/auth'
import { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { auth } from '../../base'

const SignUp = () => {
  const navigate = useNavigate()
  const handleSignUp = useCallback(
    async (event: any) => {
      event.preventDefault()
      const { email, password } = event.target.elements
      try {
        await createUserWithEmailAndPassword(auth, email.value, password.value)
        navigate('/')
      } catch (error) {
        alert(error)
      }
    },
    [navigate]
  )

  return (
    <div>
      <h1>Sign up</h1>
      <form onSubmit={handleSignUp}>
        <label>
          Email
          <input name="email" type="email" placeholder="Email" />
        </label>
        <label>
          Password
          <input name="password" type="password" placeholder="Password" />
        </label>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  )
}

export default SignUp
