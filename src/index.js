import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter } from "react-router-dom";
import App from './App';
import { NewContextProvider } from './Utils/Provider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <NewContextProvider>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </NewContextProvider>
);

