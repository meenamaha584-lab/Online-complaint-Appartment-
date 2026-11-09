import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import LandingPage from './pages/LandingPage';
import ComplaintPage from './pages/ComplaintPage';
import FeedbackPage from './pages/FeedbackPage';
import AdminLoginPage from './pages/AdminLoginPage';
import AdminDashboard from './pages/AdminDashboard';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-royalBlack text-white pt-20 bg-[url('https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center bg-fixed bg-no-repeat relative">
        <div className="absolute inset-0 bg-black/70 fixed-bg"></div> {/* Overlay */}
        <div className="relative z-10 container mx-auto px-4">
          <Navbar />
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/complaint" element={<ComplaintPage />} />
            <Route path="/feedback" element={<FeedbackPage />} />
            <Route path="/admin" element={<AdminLoginPage />} />
            <Route path="/dashboard" element={<AdminDashboard />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
