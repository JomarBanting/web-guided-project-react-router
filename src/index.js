import React from 'react';
import ReactDOM from 'react-dom/client';

// Importing the top-level component
import App from './components/App'

// Importing the styles
import './styles.css'

// 👉 STEP 1 - Import Router and wrap the app
import { BrowserRouter } from "react-router-dom"
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
<BrowserRouter>
<App />
</BrowserRouter>
);
