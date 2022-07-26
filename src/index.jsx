import React, { Component } from 'react'
import { createRoot } from 'react-dom/client';

import '../assets/stylesheets/app.scss';
import App from './components/app.jsx'
import SearchBar from './components/search_bar';


const container = document.getElementById('root')
const root = createRoot(container);

if (root) {
  root.render(
    <App />
  )
}
