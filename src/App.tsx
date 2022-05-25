import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { Layout } from './components/Layout'
import { Games } from './pages/Games'
import { Neighbors } from './pages/Neighbors'
import { Conversations } from './pages/Conversations'
import { Profile } from './pages/Profile'

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/jeux" element={<Games />} />
          <Route path="/voisins" element={<Neighbors />} />
          <Route path="/messages" element={<Conversations />} />
          <Route path="/profil" element={<Profile />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App
