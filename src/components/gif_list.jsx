import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { setGifs } from '../actions'


import Gif from './gif'

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { setGifs: setGifs },
    dispatch
  )
}

function mapReduxStateToProps(reduxState) {
  return {
    gifs: reduxState.gifs
  }
}


class Gif_list extends Component {
  renderList = () => {
    return this.props.gifs.map( gif => <Gif id= { gif.id } />)
  }

  componentWillMount() {
    this.props.setGifs()
  }

  render() {
    return (
      <div className="gif-list">
        {this.renderList()}
      </div>
    )
  }
}

export default connect(mapReduxStateToProps, mapDispatchToProps)(Gif_list)
