import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Background from "./hooks/useBackground"
import Navbar from './components/Navbar';
import Destination from './pages/Destination';
import Technology from './pages/Technology';
import Crew from './pages/Crew';
import { motion } from "framer-motion";

export default function App() {
  return (
    <>
    <Background>
      
    <motion.div className='h-auto py-36 px-6 text-[#d2d8f9]  '  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  exit={{ opacity: 0 }}
  transition={{ duration: 0.6 }}>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/destination" element={<Destination />} />
          <Route path="/crew" element={<Crew />} />
          <Route path="/technology" element={<Technology />} />
        </Routes>
    </motion.div>
    </Background>
    </>
  );
}
