import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { Landing } from './pages/Landing';
import { Experience } from './pages/Experience';
import { ConsumerGoods } from './pages/ConsumerGoods';
import { HealthCloud } from './pages/HealthCloud';
import { LifeSciences } from './pages/LifeSciences';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/consumer-goods" element={<ConsumerGoods />} />
        <Route path="/health-cloud" element={<HealthCloud />} />
        <Route path="/life-sciences" element={<LifeSciences />} />
      </Routes>
    </BrowserRouter>
  );
}
