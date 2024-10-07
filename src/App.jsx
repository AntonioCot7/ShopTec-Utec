import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import MainNavbar from './components/MainNavbar';
import UserLogin from './pages/UserLogin';
import AdminLogin from './pages/AdminLogin';
import Register from './pages/Register';
import PortadaPrincipal from './pages/PortadaPrincipal';
import AdminDashboard from './pages/AdminDashboard'; // Importa AdminDashboard

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<> <MainNavbar /> <PortadaPrincipal /> </>} />
        <Route path="/login" element={<> <Navbar /> <UserLogin /> </>} />
        <Route path="/register" element={<> <Navbar /> <Register /> </>} />
        <Route path="/admin" element={<> <Navbar /> <AdminLogin /> </>} />
        <Route path="/admin-dashboard" element={<> <Navbar /> <AdminDashboard /> </>} /> {/* Nueva ruta */}
      </Routes>
    </Router>
  );
};

export default App;
