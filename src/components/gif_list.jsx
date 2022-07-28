import React, { Component } from 'react'
import Gif from './gif'

const Gif_list = (props) => {
  return (
    <div className="gif-list">
      {props.gifs.map(gif => <Gif id={gif.id} key={gif.id} selectGif={props.selectGif} />)}
    </div>
  );
};


export default Gif_list
