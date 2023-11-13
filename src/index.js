import React from 'react';
import ReactDOM from 'react-dom/client';

// Importing CSS
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';

import { BrowserRouter } from 'react-router-dom'
import App from './components/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);