import React from 'react';
import ReactDOM from 'react-dom/client';
import DATA_ENTRIES from './data.json';

// Importing CSS
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';

import App from './components/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App data={DATA_ENTRIES} />
);