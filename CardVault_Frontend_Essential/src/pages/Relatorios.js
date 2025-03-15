import React from 'react';

const Relatorios = () => {
  return (
    <div className="relatorios-container">
      <div className="dashboard-header">
        <h1 className="dashboard-title">Relatórios</h1>
        <div className="dashboard-actions">
          <button className="btn btn-primary">
            <i className="fas fa-file-export"></i> Exportar Relatório
          </button>
        </div>
      </div>
      
      <div className="row">
        <div className="col-md-4 mb-4">
          <div className="card">
            <div className="card-header">
              Relatório de Utilização
            </div>
            <div className="card-body">
              <p>Análise detalhada da utilização de gift cards por período.</p>
              <button className="btn btn-outline-primary">Gerar Relatório</button>
            </div>
          </div>
        </div>
        
        <div className="col-md-4 mb-4">
          <div className="card">
            <div className="card-header">
              Relatório por Fornecedor
            </div>
            <div className="card-body">
              <p>Análise de gift cards agrupados por fornecedor.</p>
              <button className="btn btn-outline-primary">Gerar Relatório</button>
            </div>
          </div>
        </div>
        
        <div className="col-md-4 mb-4">
          <div className="card">
            <div className="card-header">
              Relatório de Vencimentos
            </div>
            <div className="card-body">
              <p>Lista de gift cards próximos do vencimento.</p>
              <button className="btn btn-outline-primary">Gerar Relatório</button>
            </div>
          </div>
        </div>
      </div>
      
      <div className="card mt-4">
        <div className="card-header">
          Relatórios Personalizados
        </div>
        <div className="card-body">
          <p className="text-center py-3">Funcionalidade de relatórios personalizados em desenvolvimento</p>
        </div>
      </div>
    </div>
  );
};

export default Relatorios;
