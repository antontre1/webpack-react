import React, { Component } from 'react'
import SearchBar from './search_bar'
import Gif from './gif'
import Gif_list from './gif_list'
import giphy from 'giphy-api'

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      gifs: [],
      selectedGifId: "8jnAVuSyXGJwIqu1YX"
    }

  }

  search = (query) => {
    giphy('hXP5JI6yUUlC45EynSK0qAdeKu4IFQRn').search({
        q: query,
        rating: 'g',
        limit: 10
    }, (err, res) => {
        console.log(res)
        this.setState({
          gifs: res.data
        })
    });
  }

  render() {
    return (
    <div>
      <div className="left-scene">
        <SearchBar searchFunction = {this.search}/>
        <div className="selected-gif">
          <Gif id={this.state.selectedGifId}/>
        </div>
      </div>
      <div className="right-scene">
          <Gif_list gifs={this.state.gifs} />
      </div>
    </div>
    )
  }
}

export default App
