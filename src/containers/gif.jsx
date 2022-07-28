import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

class Gif extends Component {
  handleClick = () => {
    //REDUX ACTION
    console.log("ok ici handleclick")
    console.log(this.props)
    console.log(this.props.id)
    console.log(this.props.gif)
    debugger
    this.props.selectGif(this.props.gif)
  }


  render() {
    const src = `https://media0.giphy.com/media/${this.props.id}/giphy.webp`

    let classes = "mycard gif"
    if (this.props.gif === this.props.selectedGif) {
      classes += " selected"
    }
    return (
      <div className={classes} onClick={this.handleClick}>
        <img src={src} alt="" className="gif" />
      </div>
    )
  }
}

import { selectGif } from '../actions/index'

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { selectGif: selectGif},
    dispatch
    )
  }

function mapReduxStateToProps(reduxState) {
  return {
    selectedGif: reduxState.selectedGif
  }
}

export default connect(null, mapDispatchToProps)(Gif)
