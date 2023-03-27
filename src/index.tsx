import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const rootNode = document.getElementById('root') as HTMLElement;
rootNode.setAttribute(
  'style',
  'position: fixed; display: flex; flex-direction: column; height: 100%; width: 100%;'
);

const root = ReactDOM.createRoot(rootNode);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
