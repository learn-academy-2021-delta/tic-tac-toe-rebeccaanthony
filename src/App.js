import React, { Component } from 'react'
import Square from './components/Square'
import './App.css'

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      squares: ["", "", "", "", "", "", "", "", ""],
      turn: 1, //counter to keep track of turns
      p1Moves: [],
      p2Moves: [],
    }
  }

  handleGamePlay = (index) => {
    //destructuring
    const {squares, turn, p1Moves, p2Moves} = this.state
//at[i] of squares array is forced to boolean value using the boolean method and then flipped using the bang operator
//ex: squares[0] => true because empty string is a falsey value.
    if(!Boolean(squares[index])){

    //if first turn (or odd number on counter)-> then return X
    if (turn%2 !== 0){
      setTimeout(()=> alert("player 2 turn"), 100)
      squares[index] = "❎"
      let newTurn = turn + 1
      let newP1Moves = [...p1Moves, index]
      this.setState({squares: squares, turn: newTurn, p1Moves: newP1Moves})
      console.log(p1Moves)
    }

    //if after (if even number counter) -> return O
    else {
      setTimeout(()=> alert ("player 1 turn"), 100)
      squares[index] = "🅾️"
      let newTurn = turn + 1
      this.setState({squares: squares, turn: newTurn})
    }
 //creates 2 arrays to track player moves
    //create array of arrays with each inner array being a win condition
    const winConditions=[
      [0, 4, 8],
      [0, 3, 6],
      [1, 4, 7], 
      [2, 5, 8],
      [0, 1, 2], 
      [3, 4, 5], 
      [6, 7, 8], 
      [2, 4, 6]
    ];

     // for (let i = 0, i < winConditions.length; i++){  //iterates through winConditions array 
    //   winConditions[0].every(values => {
    //    returns player1moves.includes(values)
    //}
    //        
    // }

    //after click check if either player won
    //test if player meets any of the 8 win conditions


    //iterate through win conditions array to look at each inner array

    //if any come back true -> end game (alert)

    //if it contains the 3 indexes (changes based on which win)


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
