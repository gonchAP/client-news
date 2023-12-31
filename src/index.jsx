import React from 'react';
import { Provider } from 'react-redux';
import { createRoot } from 'react-dom/client';

import reportWebVitals from './reportWebVitals';
import App from './App';
import store from './store';

import './index.css';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <Provider store={store}>
    <App />
  </Provider>,
);
reportWebVitals();
