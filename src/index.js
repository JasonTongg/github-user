import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from 'react-redux';
import Store from './Redux/index';
import {getUserApi} from './Redux/Action';
import {Auth0Provider} from '@auth0/auth0-react';
Store.dispatch(getUserApi);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-hdp7enfxhd7ixzc5.us.auth0.com"
      clientId="bnstoAQCuaIasf4PXeTkKTV69PyMGCRf"
      redirectUri={window.location.origin}
    >
      <Provider store={Store}>
        <App />
      </Provider>
    </Auth0Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
