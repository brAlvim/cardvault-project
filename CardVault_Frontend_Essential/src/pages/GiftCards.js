import React, { useState } from 'react';

const GiftCards = () => {
  const [giftCards, setGiftCards] = useState([
    { 
      codigo: 'GC009', 
      fornecedor: 'PagSeguro', 
      valorInicial: 'R$ 10,00', 
      saldoAtual: 'R$ 0,00', 
      validade: '10/12/2023', 
      status: 'Zerado'
    },
    // Outros gift cards seriam adicionados aqui
  ]);

  return (
    <div className="gift-cards-container">
      <div className="dashboard-header">
        <h1 className="dashboard-title">Gift Cards</h1>
        <div className="dashboard-actions">
          <button className="btn btn-primary">
            <i className="fas fa-plus"></i> Novo Gift Card
          </button>
        </div>
      </div>
      
      <div className="card">
        <div className="card-header d-flex justify-content-between align-items-center">
          <div className="d-flex gap-2">
            <div className="input-group">
              <select className="form-select" style={{width: '150px'}}>
                <option>Status</option>
                <option>Ativo</option>
                <option>Zerado</option>
                <option>Expirado</option>
              </select>
            </div>
            <div className="input-group">
              <select className="form-select" style={{width: '150px'}}>
                <option>Fornecedor</option>
                <option>Amazon</option>
                <option>Netflix</option>
                <option>PagSeguro</option>
                <option>Spotify</option>
                <option>Steam</option>
                <option>Uber</option>
              </select>
            </div>
          </div>
          <div>
            <button className="btn btn-outline-secondary">
              <i className="fas fa-filter"></i> Mais Filtros
            </button>
            <button className="btn btn-outline-secondary ms-2">
              <i className="fas fa-download"></i> Exportar
            </button>
          </div>
        </div>
        <div className="card-body p-0">
          <table className="gift-cards-table">
            <thead>
              <tr>
                <th>CÓDIGO</th>
                <th>FORNECEDOR</th>
                <th>VALOR INICIAL</th>
                <th>SALDO ATUAL</th>
                <th>VALIDADE</th>
                <th>STATUS</th>
                <th>AÇÕES</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>GC009</td>
                <td>PagSeguro</td>
                <td>R$ 10,00</td>
                <td>R$ 0,00</td>
                <td>10/12/2023</td>
                <td>Zerado</td>
                <td>
                  <a href="#" className="action-icon">
                    <i className="fas fa-eye"></i>
                  </a>
                  <a href="#" className="action-icon">
                    <i className="fas fa-edit"></i>
                  </a>
                  <a href="#" className="action-icon text-danger">
                    <i className="fas fa-trash"></i>
                  </a>
                </td>
              </tr>
              {/* Mais linhas seriam adicionadas dinamicamente */}
            </tbody>
          </table>
        </div>
        <div className="card-footer d-flex justify-content-between align-items-center">
          <div>
            Mostrando 1 a 1 de 1 resultado
          </div>
          <div className="pagination">
            <button className="btn btn-outline-secondary btn-sm">
              <i className="fas fa-chevron-left"></i>
            </button>
            <button className="btn btn-primary btn-sm mx-1">1</button>
            <button className="btn btn-outline-secondary btn-sm">
              <i className="fas fa-chevron-right"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GiftCards;
