import React from 'react';
import ReactDOM from 'react-dom';
import './styles/reset.css';
import { ThemeProvider } from '@emotion/react';
import App from './pages/App';
import theme from './styles/theme';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
