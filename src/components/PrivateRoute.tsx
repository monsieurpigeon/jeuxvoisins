import { Navigate } from 'react-router-dom'
import { useAuth } from '../contextes/auth'
import { isAdmin } from '../utils/access'

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

export const AdminRoute: React.FC<Props> = ({ children }) => {
  const { currentUser } = useAuth()
  if (!isAdmin(currentUser)) {
    return <Navigate to="/" replace />
  }

  return children
}
