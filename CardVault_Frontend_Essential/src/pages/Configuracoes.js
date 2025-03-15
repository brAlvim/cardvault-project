import React from 'react';

const Configuracoes = () => {
  return (
    <div className="configuracoes-container">
      <div className="dashboard-header">
        <h1 className="dashboard-title">Configurações</h1>
      </div>
      
      <div className="row">
        <div className="col-md-4 mb-4">
          <div className="card">
            <div className="card-header">
              Configurações Gerais
            </div>
            <div className="card-body">
              <form>
                <div className="mb-3">
                  <label className="form-label">Nome da Empresa</label>
                  <input type="text" className="form-control" value="Minha Empresa" />
                </div>
                <div className="mb-3">
                  <label className="form-label">Email de Contato</label>
                  <input type="email" className="form-control" value="contato@minhaempresa.com" />
                </div>
                <div className="mb-3">
                  <label className="form-label">Fuso Horário</label>
                  <select className="form-select">
                    <option>America/Sao_Paulo</option>
                    <option>America/New_York</option>
                    <option>Europe/London</option>
                  </select>
                </div>
                <button type="button" className="btn btn-primary">Salvar Alterações</button>
              </form>
            </div>
          </div>
        </div>
        
        <div className="col-md-4 mb-4">
          <div className="card">
            <div className="card-header">
              Notificações
            </div>
            <div className="card-body">
              <form>
                <div className="mb-3 form-check">
                  <input type="checkbox" className="form-check-input" id="notif1" checked />
                  <label className="form-check-label" htmlFor="notif1">Notificar sobre gift cards próximos do vencimento</label>
                </div>
                <div className="mb-3 form-check">
                  <input type="checkbox" className="form-check-input" id="notif2" checked />
                  <label className="form-check-label" htmlFor="notif2">Notificar sobre novas transações</label>
                </div>
                <div className="mb-3 form-check">
                  <input type="checkbox" className="form-check-input" id="notif3" />
                  <label className="form-check-label" htmlFor="notif3">Notificar sobre novos usuários</label>
                </div>
                <div className="mb-3">
                  <label className="form-label">Antecedência para notificação de vencimento</label>
                  <select className="form-select">
                    <option>7 dias</option>
                    <option>15 dias</option>
                    <option>30 dias</option>
                  </select>
                </div>
                <button type="button" className="btn btn-primary">Salvar Preferências</button>
              </form>
            </div>
          </div>
        </div>
        
        <div className="col-md-4 mb-4">
          <div className="card">
            <div className="card-header">
              Segurança
            </div>
            <div className="card-body">
              <form>
                <div className="mb-3 form-check">
                  <input type="checkbox" className="form-check-input" id="sec1" checked />
                  <label className="form-check-label" htmlFor="sec1">Autenticação de dois fatores</label>
                </div>
                <div className="mb-3">
                  <label className="form-label">Tempo de expiração da sessão</label>
                  <select className="form-select">
                    <option>30 minutos</option>
                    <option>1 hora</option>
                    <option>4 horas</option>
                  </select>
                </div>
                <div className="mb-3">
                  <label className="form-label">Política de senha</label>
                  <select className="form-select">
                    <option>Forte (letras, números e símbolos)</option>
                    <option>Média (letras e números)</option>
                    <option>Básica (mínimo 8 caracteres)</option>
                  </select>
                </div>
                <button type="button" className="btn btn-primary">Salvar Configurações</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Configuracoes;
