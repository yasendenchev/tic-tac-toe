import { useState } from "react";
import "./Board.css";
import Square from "../Square/Square";

function Board({ xIsNext, squares, onPlay }) {
  const handleSquareClick = (index) => {
    if (calculateWinner(squares) || squares[index]) {
      return;
    }
    const nextSquares = squares.slice();
    // nextSquares[index] = xIsNext ? "X" : "O";
    onPlay(nextSquares);
  };

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O");
  }
  
  return (
    <>
      <div className="status">{status}</div>
      <div className="board">
        <div className="board-row">
          <Square
            value={squares[0]}
            onSquareClick={() => handleSquareClick(0)}
          />
          <Square
            value={squares[1]}
            onSquareClick={() => handleSquareClick(1)}
          />
          <Square
            value={squares[2]}
            onSquareClick={() => handleSquareClick(2)}
          />
        </div>
        <div className="board-row">
          <Square
            value={squares[3]}
            onSquareClick={() => handleSquareClick(3)}
          />
          <Square
            value={squares[4]}
            onSquareClick={() => handleSquareClick(4)}
          />
          <Square
            value={squares[5]}
            onSquareClick={() => handleSquareClick(5)}
          />
        </div>
        <div className="board-row">
          <Square
            value={squares[6]}
            onSquareClick={() => handleSquareClick(6)}
          />
          <Square
            value={squares[7]}
            onSquareClick={() => handleSquareClick(7)}
          />
          <Square
            value={squares[8]}
            onSquareClick={() => handleSquareClick(8)}
          />
        </div>
      </div>
    </>
  );
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[b] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

export default Board;
