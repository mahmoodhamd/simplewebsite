import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import { Auth0Provider } from '@auth0/auth0-react';

ReactDOM.render(
<>

<BrowserRouter>
<Auth0Provider
    domain="dev-zdpmckq71grhiq12.us.auth0.com"
    clientId="fSINgrUpnZb5yzKGeUSOjNfsAE18snbx"
    redirectUri={window.location.origin}
  >  
 <App/>
 </Auth0Provider>,
 </BrowserRouter>
 </>,
 document.getElementById('root'));





