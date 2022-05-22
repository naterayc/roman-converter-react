import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import RomanConverterApp from './components/romanConverterApp';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RomanConverterApp />
  </React.StrictMode>
);
