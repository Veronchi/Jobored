import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.js';
import './styles/reset.scss';
import './styles/normalize.scss';
import './index.scss';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
