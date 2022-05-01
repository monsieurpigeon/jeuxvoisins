import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Games } from './pages/Games'
import { Game } from './pages/Game'
import { Layout } from './components/Layout'
import { People } from './pages/People'
import { Peoples } from './pages/Peoples'
import { Company } from './pages/Company'
import { Companies } from './pages/Companies'

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/game/:id" element={<Game />} />
          <Route path="/" element={<Games />} />
          <Route path="/people/:id" element={<People />} />
          <Route path="/people" element={<Peoples />} />
          <Route path="/company/:id" element={<Company />} />
          <Route path="/company" element={<Companies />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App
