import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import GiftCards from './pages/GiftCards';
import Fornecedores from './pages/Fornecedores';
import Transacoes from './pages/Transacoes';
import Relatorios from './pages/Relatorios';
import Usuarios from './pages/Usuarios';
import Configuracoes from './pages/Configuracoes';
import './assets/css/main.css';

function App() {
  return (
    <div className="app-container">
      <Sidebar />
      <div className="content-container">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/gift-cards" element={<GiftCards />} />
          <Route path="/fornecedores" element={<Fornecedores />} />
          <Route path="/transacoes" element={<Transacoes />} />
          <Route path="/relatorios" element={<Relatorios />} />
          <Route path="/usuarios" element={<Usuarios />} />
          <Route path="/configuracoes" element={<Configuracoes />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
