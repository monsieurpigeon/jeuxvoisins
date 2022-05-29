import { signInWithEmailAndPassword } from 'firebase/auth'
import { useCallback } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { auth } from '../../base'
import { useAuth } from '../../contextes/auth'

const Login = () => {
  const { currentUser } = useAuth()
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

  if (currentUser) {
    return <Navigate to="/" />
  }

  const Container = styled.div`
    color: white;
    display: flex;
    flex-direction: column;
  `

  const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 10px;
  `
  const Input = styled.input`
    margin-left: 10px;
  `
  const Button = styled.button`
    padding: 5px;
    width: 200px;
  `

  const StyledLink = styled.div`
    color: white;
    padding: 20px;
    text-decoration: none;
  `

  return (
    <Container>
      <h1>Log in</h1>
      <Form onSubmit={handleLogin}>
        <label>
          Email
          <Input name="email" type="email" placeholder="Email" />
        </label>
        <label>
          Password
          <Input name="password" type="password" placeholder="Password" />
        </label>
        <Button type="submit">Log in</Button>
      </Form>
      <Link to="/sign-up">
        <StyledLink>Click to Sign Up</StyledLink>
      </Link>
    </Container>
  )
}

export default Login
