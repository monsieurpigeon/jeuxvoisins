import { createUserWithEmailAndPassword } from 'firebase/auth'
import { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
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

  return (
    <Container>
      <h1>Sign up</h1>
      <Form onSubmit={handleSignUp}>
        <label>
          Email
          <Input name="email" type="email" placeholder="Email" />
        </label>
        <label>
          Username
          <Input name="username" type="text" placeholder="Username" />
        </label>
        <label>
          Password
          <Input name="password" type="password" placeholder="Password" />
        </label>
        <Button type="submit">Sign Up</Button>
      </Form>
    </Container>
  )
}

export default Signup
