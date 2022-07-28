import gifs from '../gifs.js'

export function setGifs() {

  return {
    type: 'SET_GIFS',
    payload: gifs
  }
}
