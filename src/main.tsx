/**
 * Main Entry Point for React Application
 *
 * This file:
 * 1. Imports React and ReactDOM
 * 2. Imports global CSS styles (including Tailwind)
 * 3. Renders the App component into the DOM
 */

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

// Get the root element from index.html
const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error('Root element not found');
}

// Render the React app
ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
