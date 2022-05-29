import { Navigate } from 'react-router-dom'
import { useAuth } from '../contextes/auth'

type Props = {
  children: any
}

export const ProtectedRoute: React.FC<Props> = ({ children }) => {
  const { currentUser } = useAuth()
  if (!currentUser) {
    return <Navigate to="/login" replace />
  }

  return children
}
