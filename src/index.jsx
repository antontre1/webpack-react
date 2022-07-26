import React, { Component } from 'react'
import { createRoot } from 'react-dom/client';
import '../assets/stylesheets/application.scss';


// const Hello = (props) => {
//   return  <h1>Hello {props.name} !</h1>;
// }


class Hello extends Component {

  constructor(props) {
    super(props)
    this.state = {
      clicked: false,
      counter: 0
    }
  }

  // si l'on écrit simplement handleClick() pour définir la fonction, le this correspondra à la fonction elle même
  // si l'on écrit en ES6 handleClick = () => {} , alors on aura le this qui équivaut à l'instance de la classe dans laquelle nous sommes
  // we define a new state in the compoonent --> react will update automatically
  handleClick = () => {
    console.log("ok clicked")
    this.setState({
      clicked: !this.state.clicked,
      counter: this.state.counter + 1
    })
  }

  render() {
    return (
      <div className="wrapper">
        <div className = { this.state.clicked ? 'clicked' : null } onClick={ this.handleClick }> Hello { this.props.name } </div>
        <div className="counter-value"> { this.state.counter } </div>
      </div>
    )
  }

}


const container = document.getElementById('root')
const root = createRoot(container);

if (root) {
  root.render(
    <Hello name = "Antontre" />
  )
}
