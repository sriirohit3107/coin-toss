import React, { useState } from 'react';
import './App.css';

function App() {
  const [flipResult, setFlipResult] = useState(null);
  const [userChoice, setUserChoice] = useState(null);
  const [isFlipping, setIsFlipping] = useState(false);

  const coinSides = ['heads', 'tails'];

  // Handle the coin flip
  const flipCoin = (choice) => {
    if (isFlipping) return;

    setUserChoice(choice);
    setIsFlipping(true);

    // Start the flipping animation
    setTimeout(() => {
      const result = coinSides[Math.floor(Math.random() * coinSides.length)];
      setFlipResult(result);
      setIsFlipping(false);
    }, 2000); // Coin flip animation time
  };

  return (
    <div className="App">
      <h1>Coin Toss Game</h1>
      <div className="coin-container">
        <div className={`coin ${isFlipping ? 'flip' : ''}`}>
          <div className="side heads">Heads</div>
          <div className="side tails">Tails</div>
        </div>
      </div>
      <div className="buttons">
        <button onClick={() => flipCoin('heads')} disabled={isFlipping}>Heads</button>
        <button onClick={() => flipCoin('tails')} disabled={isFlipping}>Tails</button>
      </div>
      <div className="result">
        {flipResult && (
          <h2>
            The coin landed on {flipResult}!
            {flipResult === userChoice ? " You Win!" : " You Lose!"}
          </h2>
        )}
      </div>
    </div>
  );
}

export default App;
