import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { StoreProvider } from './Provider/store';
import { initialState, dataReducers } from './Provider/reducer'

ReactDOM.render(
  <React.StrictMode>
    <StoreProvider initialState={initialState} reducer={dataReducers}>
      <App />
    </StoreProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
