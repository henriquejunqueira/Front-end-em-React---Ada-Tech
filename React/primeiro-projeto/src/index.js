// ! importa bibliotecas
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// ! obtém o elemento <div id="root"></div> do index.html da pasta public e armazena na constante root
const root = ReactDOM.createRoot(document.getElementById('root'));

// ! renderiza o elemento (joga o elemento root na tela)
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// ! <App /> é a representação da função App do arquivo App.js da pasta src
// ! <React.StrictMode> cria um debug pra encontrar possíveis erros
