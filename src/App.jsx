import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import Contact from './pages/Contact.jsx'

export default function App() {
  const location = useLocation()
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<PageWrapper><Home/></PageWrapper>}/>
          <Route path="/contact" element={<PageWrapper><Contact/></PageWrapper>}/>
        </Routes>
      </AnimatePresence>
      <Footer />
    </div>
  )
}

function PageWrapper({ children }) {
  return (
    <motion.main
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="flex-grow"
    >
      {children}
    </motion.main>
  )
}
