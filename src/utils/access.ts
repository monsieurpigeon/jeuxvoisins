import { User } from '../contextes/auth'

export const isAdmin = (user: User | null) => {
  return user?.email === 'maxpige+4@gmail.com'
}
