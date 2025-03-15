# CardVault - Frontend

Este é o frontend do CardVault, um sistema de gerenciamento de gift cards que permite que empresas e indivíduos acompanhem a utilização e disponibilidade de seus cartões de maneira organizada e intuitiva.

## Estrutura do Projeto

O projeto foi desenvolvido utilizando React e segue a seguinte estrutura:

```
src/
  ├── assets/
  │   ├── css/
  │   │   ├── main.css
  │   │   └── responsive.css
  │   └── images/
  ├── components/
  │   ├── ChartComponent.js
  │   └── Sidebar.js
  ├── pages/
  │   ├── Dashboard.js
  │   ├── GiftCards.js
  │   └── ... (outras páginas)
  ├── App.js
  └── index.js
```

## Funcionalidades Implementadas

- **Barra Lateral de Navegação**: Menu lateral com acesso a todas as funcionalidades do sistema
- **Dashboard Principal**: Visão geral com gráficos, gift cards próximos do vencimento e atividades recentes
- **Listagem de Gift Cards**: Tabela com todos os gift cards cadastrados, com opções de filtro e ações
- **Design Responsivo**: Interface adaptável para diferentes tamanhos de tela

## Como Executar o Projeto

1. Certifique-se de ter o Node.js instalado (versão 14 ou superior)
2. Instale as dependências:
   ```
   npm install
   ```
3. Instale o React Scripts:
   ```
   npm install react-scripts
   ```
4. Inicie o servidor de desenvolvimento:
   ```
   npm start
   ```
5. Acesse o aplicativo em seu navegador em `http://localhost:3000`

## Tecnologias Utilizadas

- React
- React Router
- Bootstrap
- Chart.js
- FontAwesome

## Próximos Passos

- Implementação do backend para persistência de dados
- Integração com APIs de fornecedores de gift cards
- Implementação de autenticação e autorização
- Desenvolvimento de funcionalidades adicionais como relatórios personalizados

## Screenshots

As telas implementadas seguem fielmente os mockups fornecidos, incluindo:
- Dashboard com gráficos e visualizações
- Listagem de gift cards com filtros e ações
- Interface responsiva para diferentes dispositivos
