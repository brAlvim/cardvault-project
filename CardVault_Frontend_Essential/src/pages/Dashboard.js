import React from 'react';
import ChartComponent from '../components/ChartComponent';

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h1 className="dashboard-title">Dashboard</h1>
        <div className="dashboard-actions">
          <div className="input-group search-input">
            <input type="text" className="form-control" placeholder="Pesquisar..." />
            <button className="btn btn-outline-secondary" type="button">
              <i className="fas fa-search"></i>
            </button>
          </div>
          <button className="btn btn-outline-secondary">
            <i className="fas fa-filter"></i> Filtros
          </button>
        </div>
      </div>
      
      <div className="row">
        <div className="col-md-8">
          <div className="card">
            <div className="card-header">
              Gráfico de Gift Cards por Fornecedor
              <div className="dropdown">
                <button className="btn btn-sm btn-outline-secondary dropdown-toggle" type="button">
                  Últimos 30 dias
                </button>
              </div>
            </div>
            <div className="card-body">
              <div className="chart-container">
                <ChartComponent />
              </div>
            </div>
          </div>
        </div>
        
        <div className="col-md-4">
          <div className="card">
            <div className="card-header">
              Gift Cards Próximos do Vencimento
              <a href="#" className="text-primary">Ver Todos</a>
            </div>
            <div className="card-body p-0">
              <table className="table mb-0">
                <thead>
                  <tr>
                    <th>Código</th>
                    <th>Fornecedor</th>
                    <th>Valor</th>
                    <th>Vencimento</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>GC009</td>
                    <td>Uber</td>
                    <td>R$ 30,00</td>
                    <td><span className="text-danger">5 dias</span></td>
                  </tr>
                  <tr>
                    <td>GC008</td>
                    <td>Amazon</td>
                    <td>R$ 75,00</td>
                    <td><span className="text-warning">15 dias</span></td>
                  </tr>
                  <tr>
                    <td>GC007</td>
                    <td>Netflix</td>
                    <td>R$ 50,00</td>
                    <td><span className="text-warning">30 dias</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      
      <div className="row mt-4">
        <div className="col-md-8">
          <div className="card">
            <div className="card-header">
              Gift Cards Recentes
              <a href="#" className="text-primary">Ver Todos</a>
            </div>
            <div className="card-body p-0">
              <table className="table mb-0">
                <thead>
                  <tr>
                    <th>Fornecedor</th>
                    <th>Código</th>
                    <th>Valor</th>
                    <th>Data</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Amazon - GC001</td>
                    <td>Maria Oliveira</td>
                    <td>R$ 10,00</td>
                    <td>12/03/2025</td>
                    <td><span className="status-badge status-active">Completo</span></td>
                  </tr>
                  <tr>
                    <td>Netflix - GC002</td>
                    <td>João Silva</td>
                    <td>R$ 15,00</td>
                    <td>11/03/2025</td>
                    <td><span className="status-badge status-active">Completo</span></td>
                  </tr>
                  <tr>
                    <td>Spotify - GC003</td>
                    <td>Carlos Gomes</td>
                    <td>R$ 25,00</td>
                    <td>10/03/2025</td>
                    <td><span className="status-badge status-pending">Pendente</span></td>
                  </tr>
                  <tr>
                    <td>Steam - GC004</td>
                    <td>Ana Souza</td>
                    <td>R$ 50,00</td>
                    <td>09/03/2025</td>
                    <td><span className="status-badge status-active">Completo</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        
        <div className="col-md-4">
          <div className="card">
            <div className="card-header">
              Atividades Recentes
              <a href="#" className="text-primary">Ver Todas</a>
            </div>
            <div className="card-body">
              <div className="activity-item d-flex align-items-start mb-3">
                <div className="activity-avatar bg-primary text-white rounded-circle p-2 me-3">MO</div>
                <div>
                  <h6 className="mb-1">Maria Oliveira</h6>
                  <p className="mb-1">Registrou uma transação de R$ 10,00 no gift card Amazon (GC001)</p>
                  <small className="text-muted">10/03/2025 às 14:25</small>
                </div>
              </div>
              
              <div className="activity-item d-flex align-items-start mb-3">
                <div className="activity-avatar bg-success text-white rounded-circle p-2 me-3">JS</div>
                <div>
                  <h6 className="mb-1">João Silva</h6>
                  <p className="mb-1">Adicionou um novo gift card Netflix (GC002)</p>
                  <small className="text-muted">09/03/2025 às 10:15</small>
                </div>
              </div>
              
              <div className="activity-item d-flex align-items-start mb-3">
                <div className="activity-avatar bg-info text-white rounded-circle p-2 me-3">CG</div>
                <div>
                  <h6 className="mb-1">Carlos Gomes</h6>
                  <p className="mb-1">Atualizou as informações do fornecedor Spotify</p>
                  <small className="text-muted">08/03/2025 às 16:30</small>
                </div>
              </div>
              
              <div className="activity-item d-flex align-items-start">
                <div className="activity-avatar bg-warning text-white rounded-circle p-2 me-3">AS</div>
                <div>
                  <h6 className="mb-1">Ana Souza</h6>
                  <p className="mb-1">Registrou as transações do mês de março</p>
                  <small className="text-muted">08/03/2025 às 09:45</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
