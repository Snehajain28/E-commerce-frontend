
import React from 'react';
import { GoogleOAuthProvider } from '@react-oauth/google';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import { NewContextProvider } from './Utils/Provider';


const clientId = "156031872882-ogdd3uj2sqlukbr4m983g601cb2v0jhf.apps.googleusercontent.com"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <NewContextProvider>
        <BrowserRouter>
            <GoogleOAuthProvider clientId={clientId}>
                <App />
            </GoogleOAuthProvider>
        </BrowserRouter>
    </NewContextProvider >

);


