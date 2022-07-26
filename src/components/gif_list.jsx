import React, { Component } from 'react'
import Gif from './gif'


class Gif_list extends Component {
  renderList = () => {
    return this.props.gifs.map( gif => <Gif id= { gif.id } />)
  }
  render() {
    return (
      <div className="gif-list">
        {this.renderList()}
      </div>
    )
  }
}

export default Gif_list
