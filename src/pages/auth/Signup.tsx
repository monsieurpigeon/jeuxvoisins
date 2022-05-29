import { createUserWithEmailAndPassword } from 'firebase/auth'
import { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { auth } from '../../base'
import { useAddUserMutation } from '../../generated/graphql'

const Signup = () => {
  const [addUser] = useAddUserMutation()
  const navigate = useNavigate()
  const handleSignUp = useCallback(
    async (event: any) => {
      event.preventDefault()
      const { email, password, username } = event.target.elements
      try {
        await createUserWithEmailAndPassword(auth, email.value, password.value)
        await addUser({
          variables: { user: { username: username.value, email: email.value } },
        })
        navigate('/')
      } catch (error) {
        alert(error)
      }
    },
    [navigate, addUser]
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
          Username
          <input name="username" type="text" placeholder="Username" />
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

export default Signup
