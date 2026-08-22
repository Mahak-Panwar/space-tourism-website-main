import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Background from "./hooks/useBackground"
import Navbar from './components/Navbar';
import Destination from './pages/Destination';
import Technology from './pages/Technology';
import Crew from './pages/Crew';
export default function App() {
  return (
    <>
    <Background>
      
    <div className='h-auto py-12 px-6  text-white'>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/destination" element={<Destination />} />
          <Route path="/crew" element={<Crew />} />
          <Route path="/technology" element={<Technology />} />
        </Routes>
    </div>
    </Background>
    </>
  );
}
