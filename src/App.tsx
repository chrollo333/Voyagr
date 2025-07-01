import './App.css'
import { AnimatePresence } from "framer-motion";
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatedPage } from './components/AnimatedPage';
import LandingPage from './pages/LandingPage'
import Navbar from './components/Navbar'
import StarryBackground from './components/StarryBackground'
import Auth from './pages/Auth'
import Explore from './pages/Explore';

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route 
          path="/" 
          element={
            <AnimatedPage>
              <LandingPage />
            </AnimatedPage>
          } 
        />
        <Route 
          path="/explore" 
          element={
            <AnimatedPage>
              <Explore />
            </AnimatedPage>
          } 
        />
        <Route 
          path="/auth" 
          element={
            <AnimatedPage>
              <Auth />
            </AnimatedPage>
          } 
        />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <StarryBackground />
      <Navbar />
      <AnimatedRoutes />
    </BrowserRouter>
  )
}