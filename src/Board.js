import { useState } from "react";
import "./Board.css";
import Square from "./components/Square/Square";

function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [currentTurnSymbol, setSymbol] = useState("X");

  const handleSquareClick = (index) => {
    if (squares[index] === null) {
      const nextSquares = squares.slice();
      nextSquares[index] = currentTurnSymbol;
      setSquares(nextSquares);
      setSymbol(currentTurnSymbol === "X" ? "O" : "X");
    }
  };

  return (
    <>
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

export default Board;
