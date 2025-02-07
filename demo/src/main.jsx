import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { DiceProvider } from '@3d-dice/dice-box-threejs';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <DiceProvider>
      <App />
    </DiceProvider>
  </React.StrictMode>
);
