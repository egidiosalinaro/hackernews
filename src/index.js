import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import { Button } from './components/button';
import { loadMoreButton } from './hooks/loadMoreButton';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

const rootLoading = ReactDOM.createRoot(document.getElementById('button'));
rootLoading.render(
  <React.StrictMode>
    <Button />
  </React.StrictMode>
);

loadMoreButton();
reportWebVitals();
