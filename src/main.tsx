import React from 'react';
import ReactDOM from 'react-dom/client';
import { Toaster } from 'react-hot-toast';
import App from './App.tsx';

import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import './styles/global.scss';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
    <Toaster
      position='top-right'
      toastOptions={{
        duration: 3000,
      }}
    />
  </React.StrictMode>,
)
