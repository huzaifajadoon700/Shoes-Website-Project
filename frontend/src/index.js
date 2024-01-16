import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import "bootstrap/dist/css/bootstrap.css"

import {GoogleOAuthProvider} from "@react-oauth/google"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
<GoogleOAuthProvider clientId='498092527246-3kt38e95trqfpbdenjbe7eseueb6u0r4.apps.googleusercontent.com'>
<App />
</GoogleOAuthProvider>

  </BrowserRouter>
   
  
);


