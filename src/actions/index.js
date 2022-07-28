import gifs from '../gifs.js'

export function setGifs() {
  return {
    type: 'SET_GIFS',
    payload: gifs
  }
}

export function selectGif(gif) {
  return {
    type: 'SELECT_GIF',
    payload: "hello"
  }
}
