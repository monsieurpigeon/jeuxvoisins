import ReactDOM from 'react-dom/client'
import { AuthProvider } from './contextes/auth'
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(<AuthProvider />)
