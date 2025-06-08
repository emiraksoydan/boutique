import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';
import 'primereact/resources/themes/lara-light-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import './assets/css/style.css';
import 'primeflex/primeflex.css';
import App from './App.tsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import { BrowserRouter } from 'react-router';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <PrimeReactProvider value={{ unstyled: false }}>
        <App />
      </PrimeReactProvider>
    </BrowserRouter>
  </StrictMode>,
)
