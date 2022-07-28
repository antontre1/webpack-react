import React, { Component } from 'react'
import { createRoot } from 'react-dom/client';

import { Provider } from 'react-redux'
import { createStore, combineReducers } from 'redux'

import '../assets/stylesheets/app.scss'

import gifsReducer from './reducers/gifs_reducer'
import selectedGifReducer from './reducers/selected_gif_reducer'
const reducers = combineReducers( {
  gifs: gifsReducer,
  selectedGif: selectedGifReducer
})

import App from './components/app.jsx'


const container = document.getElementById('root')
const root = createRoot(container);

if (root) {
  root.render(
    <Provider store={createStore(reducers)}>
      <App />
    </Provider>
  )
}
