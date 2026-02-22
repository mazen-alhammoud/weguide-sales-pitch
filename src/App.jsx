import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home';
import Presentation from './pages/Presentation';

function AppLayout() {
  const location = useLocation();
  const isPresentation = location.pathname === '/presentation';

  return (
    <>
      {!isPresentation && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/for-schools" element={<Home />} />
        <Route path="/dashboard" element={<Home />} />
        <Route path="/presentation" element={<Presentation />} />
      </Routes>
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppLayout />
    </BrowserRouter>
  );
}
