import React, { useEffect, useState } from "react";
const initialBoard = Array(9).fill('');

  const App = () => {
    const [board, setBoard] = useState(initialBoard);
    const [currentPlayer, setCurrentPlayer] = useState('X');
    const [gameActive, setGameActive] = useState(true);
  
    const handleCellClick = (index) => {
      if (!gameActive || board[index] !== '') {
        return;
      }
  
      const newBoard = [...board];
      newBoard[index] = currentPlayer;
      setBoard(newBoard);
  
      if (checkWin()) {
        displayMessage(`Player ${currentPlayer} wins!`);
        setGameActive(false);
        return;
      }
  
      if (checkDraw()) {
        displayMessage("It's a draw!");
        setGameActive(false);
        return;
      }
  
      setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
    };
  
    const checkWin = () => {
      const winningCombinations = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
        [0, 4, 8], [2, 4, 6] // diagonals
      ];
  
      return winningCombinations.some(combination => {
        const [a, b, c] = combination;
        return (
          board[a] &&
          board[a] === board[b] &&
          board[a] === board[c]
        );
      });
    };
  
    const checkDraw = () => {
      return board.every(cell => cell !== '');
    };
  
    const displayMessage = (message) => {
      alert(message);
    };
  
    const resetGame = () => {
      setBoard(initialBoard);
      setCurrentPlayer('X');
      setGameActive(true);
    };
  
    return (
      <div className="App">
        <div className="board">
          {board.map((cell, index) => (
            <div
              key={index}
              className={`cell ${cell}`}
              onClick={() => handleCellClick(index)}
            >
              {cell}
            </div>
          ))}
        </div>
        <button onClick={resetGame}>Reset</button>
      </div>
    );
}

export default App;
