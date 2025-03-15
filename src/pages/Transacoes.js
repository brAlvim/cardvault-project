import React from 'react';

const Transacoes = () => {
  return (
    <div className="transacoes-container">
      <div className="dashboard-header">
        <h1 className="dashboard-title">Transações</h1>
        <div className="dashboard-actions">
          <button className="btn btn-primary">
            <i className="fas fa-plus"></i> Nova Transação
          </button>
        </div>
      </div>
      
      <div className="card">
        <div className="card-header">
          <div className="d-flex justify-content-between align-items-center">
            <div className="input-group search-input">
              <input type="text" className="form-control" placeholder="Pesquisar transação..." />
              <button className="btn btn-outline-secondary" type="button">
                <i className="fas fa-search"></i>
              </button>
            </div>
            <div>
              <button className="btn btn-outline-secondary">
                <i className="fas fa-filter"></i> Filtros
              </button>
              <button className="btn btn-outline-secondary ms-2">
                <i className="fas fa-download"></i> Exportar
              </button>
            </div>
          </div>
        </div>
        <div className="card-body">
          <p className="text-center py-5">Página de Transações em desenvolvimento</p>
        </div>
      </div>
    </div>
  );
};

export default Transacoes;
