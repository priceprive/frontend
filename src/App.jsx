import { Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import AuthPage from './pages/login';
import ServicesPage from './pages/Services';
import ReportsPage from './pages/Reports';
import ContactPage from './pages/Contact';
import PricingPage from './pages/Pricing';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<AuthPage />} />
      <Route path="/services" element={<ServicesPage />} />
      <Route path="/reports" element={<ReportsPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/pricing" element={<PricingPage />} />
    </Routes>
  );
}

export default App;
