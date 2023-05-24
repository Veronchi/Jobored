import ReactDOM from 'react-dom/client';
import { App } from './App';
import { MantineProvider } from '@mantine/core';
import { customTheme } from './utils/customTheme';
import { Provider } from 'react-redux';
import { Notifications } from '@mantine/notifications';
import { store } from './store/store';
import './styles/reset.scss';
import './styles/normalize.scss';
import './index.scss';
import { StrictMode } from 'react';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <MantineProvider withGlobalStyles withNormalizeCSS theme={customTheme}>
      <Provider store={store}>
        <Notifications />
        <App />
      </Provider>
    </MantineProvider>
  </StrictMode>
);
