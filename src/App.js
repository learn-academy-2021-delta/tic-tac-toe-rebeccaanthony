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
    const {squares, turn } = this.state

    //at[i] of squares array is forced to boolean value using the boolean method and then flipped using the bang operator, if square is empty and condition returns true, update values
    if(!Boolean(squares[index])){

      //if first turn (or odd number on counter)-> then return X
      if (turn%2 !== 0){
        // setTimeout(()=> alert("Player two's turn!"), 100)
        squares[index] = "X"
        let newTurn = turn + 1
        this.setState({squares: squares, turn: newTurn})

      }

      //if after (if even number counter) -> return O
      else {
        // setTimeout(()=> alert ("Player one's turn!"), 100)
        squares[index] = "O"
        let newTurn = turn + 1
        this.setState({squares: squares, turn: newTurn})
      }
  }
}


//new function to find the winner, invoked each time the board is rendered
findWinner = (squares) => {
  //array of arrays of 8 win conditions
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
  
  //iterates through winConditions array 
  for (let i = 0; i < winConditions.length; i++){ 
    //assigns temporary variables for each element in each specific win condition array 
    const [a, b, c] = winConditions[i];
    //if something exists in first box and is the same as the thing in 2nd and 3rd box
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      //returns that thing (X or O)
      return squares[a];
    }
  }

  //if no winner return null
  return null;
}


  render(){
    //creating a variable to store the result of findWinner (X, O, or Null)
    let winner = this.findWinner(this.state.squares)

    if (winner === "X"){
      setTimeout(()=> alert("Game Over! Player 1 won!"), 100)
    } else if (winner === "O"){
      setTimeout(()=> alert("Game Over! Player 2 won!"), 100)
    } else if (winner === null && this.state.turn === 10){ 
      console.log(this.state.turn)
      setTimeout(()=> alert("Game Over! Cat's Game!"), 100)
    }

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
