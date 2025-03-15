import React from 'react';

const Usuarios = () => {
  return (
    <div className="usuarios-container">
      <div className="dashboard-header">
        <h1 className="dashboard-title">Usuários</h1>
        <div className="dashboard-actions">
          <button className="btn btn-primary">
            <i className="fas fa-user-plus"></i> Novo Usuário
          </button>
        </div>
      </div>
      
      <div className="card">
        <div className="card-header">
          <div className="d-flex justify-content-between align-items-center">
            <div className="input-group search-input">
              <input type="text" className="form-control" placeholder="Pesquisar usuário..." />
              <button className="btn btn-outline-secondary" type="button">
                <i className="fas fa-search"></i>
              </button>
            </div>
            <div>
              <button className="btn btn-outline-secondary">
                <i className="fas fa-filter"></i> Filtros
              </button>
            </div>
          </div>
        </div>
        <div className="card-body">
          <table className="table">
            <thead>
              <tr>
                <th>Nome</th>
                <th>Email</th>
                <th>Perfil</th>
                <th>Status</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Maria Oliveira</td>
                <td>maria@exemplo.com</td>
                <td>Administrador</td>
                <td><span className="status-badge status-active">Ativo</span></td>
                <td>
                  <a href="#" className="action-icon"><i className="fas fa-edit"></i></a>
                  <a href="#" className="action-icon text-danger"><i className="fas fa-trash"></i></a>
                </td>
              </tr>
              <tr>
                <td>João Silva</td>
                <td>joao@exemplo.com</td>
                <td>Usuário</td>
                <td><span className="status-badge status-active">Ativo</span></td>
                <td>
                  <a href="#" className="action-icon"><i className="fas fa-edit"></i></a>
                  <a href="#" className="action-icon text-danger"><i className="fas fa-trash"></i></a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Usuarios;
