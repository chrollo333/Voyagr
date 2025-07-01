import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import Navbar from './components/Navbar'
import StarryBackground from './components/StarryBackground'
import Auth from './pages/Auth'

export default function App() {
  return (
    <BrowserRouter>
    <StarryBackground />
    <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/explore" element={<LandingPage />} />
        <Route path="/auth" element={<Auth />} />
        {/* Add more routes later */}
      </Routes>
    </BrowserRouter>
  )
}