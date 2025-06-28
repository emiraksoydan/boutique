import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';
import 'primereact/resources/themes/lara-light-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import './assets/css/style.css';
import './admin/assets/css/style.css';
import App from './App.tsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Provider } from 'react-redux';
import { store } from './redux/store.tsx';
import { BrowserRouter } from 'react-router';
import { DataProvider } from './contexts/DataContext.tsx';
import { YupProvider } from './contexts/YupContext.tsx';


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <PrimeReactProvider value={{ unstyled: false }}>
        <Provider store={store}>
          <YupProvider>
            <DataProvider>
              <App />
            </DataProvider>
          </YupProvider>
        </Provider>
      </PrimeReactProvider>
    </BrowserRouter>
  </StrictMode>,
)
