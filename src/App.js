import React, { Component } from 'react'
import Square from './components/Square'
import './App.css'

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      squares: ["", "", "", "", "", "", "", "", ""],
      turn: 1, //counter to keep track of turns
    }
  }

  handleGamePlay = (index) => {
    //destructuring
    const {squares, turn} = this.state

    //if first turn (or odd number on counter)-> then return X
    if (turn%2 !== 0){
      squares[index] = "❎"
      let newTurn = turn + 1
      this.setState({squares: squares, turn: newTurn})
    }

    //if after (if even number counter) -> return O
    else {
      squares[index] = "🅾️"
      let newTurn = turn + 1
      this.setState({squares: squares, turn: newTurn})
    }

  }

  render(){
    return(
      <>
        <h1>Tic Tac Toe</h1>
        <div className="gameboard">
          {this.state.squares.map((value, index) => {
            return (
              <Square 
                value = {value}
                index = {index}
                key = {index}
                handleGamePlay = {this.handleGamePlay}


              />
            )
          })}
        </div>
      </>
    )
  }
}

export default App
