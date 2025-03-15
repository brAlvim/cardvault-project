import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  
  const isActive = (path) => {
    return location.pathname === path ? 'active' : '';
  };

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {isOpen && (
        <div className="sidebar-overlay" onClick={toggleSidebar}></div>
      )}
      <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        <div className="sidebar-header">
          <Link to="/" className="sidebar-logo">CardVault</Link>
          <button className="sidebar-toggle" onClick={toggleSidebar}>
            <i className="fas fa-bars"></i>
          </button>
        </div>
        
        <div className="menu-section">MENU PRINCIPAL</div>
        <ul className="sidebar-menu">
          <li>
            <Link to="/" className={`menu-item ${isActive('/')}`}>
              <i className="fas fa-tachometer-alt"></i>
              Dashboard
            </Link>
          </li>
          <li>
            <Link to="/gift-cards" className={`menu-item ${isActive('/gift-cards')}`}>
              <i className="fas fa-credit-card"></i>
              Gift Cards
            </Link>
          </li>
          <li>
            <Link to="/fornecedores" className={`menu-item ${isActive('/fornecedores')}`}>
              <i className="fas fa-store"></i>
              Fornecedores
            </Link>
          </li>
          <li>
            <Link to="/transacoes" className={`menu-item ${isActive('/transacoes')}`}>
              <i className="fas fa-exchange-alt"></i>
              Transações
            </Link>
          </li>
          <li>
            <Link to="/relatorios" className={`menu-item ${isActive('/relatorios')}`}>
              <i className="fas fa-chart-bar"></i>
              Relatórios
            </Link>
          </li>
        </ul>
        
        <div className="menu-section">ADMINISTRAÇÃO</div>
        <ul className="sidebar-menu">
          <li>
            <Link to="/usuarios" className={`menu-item ${isActive('/usuarios')}`}>
              <i className="fas fa-users"></i>
              Usuários
            </Link>
          </li>
          <li>
            <Link to="/configuracoes" className={`menu-item ${isActive('/configuracoes')}`}>
              <i className="fas fa-cog"></i>
              Configurações
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
