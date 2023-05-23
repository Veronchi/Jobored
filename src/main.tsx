import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import { MantineProvider } from '@mantine/core';
import { customTheme } from './utils/customTheme';
import { Provider } from 'react-redux';
import { store } from './store/store';
import './styles/reset.scss';
import './styles/normalize.scss';
import './index.scss';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <MantineProvider withGlobalStyles withNormalizeCSS theme={customTheme}>
      <Provider store={store}>
        <App />
      </Provider>
    </MantineProvider>
  </React.StrictMode>
);
