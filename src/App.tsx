import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<h1 className="text-3xl font-bold">Welcome to Voyagr</h1>} />
        {/* Add more routes later */}
      </Routes>
    </BrowserRouter>
  )
}