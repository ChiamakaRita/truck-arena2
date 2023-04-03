import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserHistory } from "history";
import './index.css';
import App from './App';

export const customHistory = createBrowserHistory();

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <>
    <App />
  </>
);


