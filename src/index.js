import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './styles/theme.css';

ReactDOM.render(
  <div className="wrapper">
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </div>,
  document.getElementById('root')
);

reportWebVitals();
