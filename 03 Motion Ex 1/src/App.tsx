import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/HomePage'
import ScrollAnimation from './pages/ScrollAni'
import NoPage from './pages/NoPage'
import Cursor from './pages/Cursor'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path="scrollanimation" element={<ScrollAnimation />} />
          <Route path="cursor" element={<Cursor />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
