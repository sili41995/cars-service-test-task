import React from 'react';
import ReactDOM from 'react-dom/client';
import { theme } from 'constants/index';
import App from 'components/App';
import { ThemeProvider } from '@emotion/react';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
