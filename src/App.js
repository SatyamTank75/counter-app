
import './App.css';
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  console.log("count", count);

  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div className="App">
      <header>
        <h1>Counter App</h1>
      </header>
      <div className="counter-container">
        <p className="count-text">Current Count</p>
        <p>{count}</p>
      </div>
      <div className="button=container">
        <button className="increment-button" onClick={increment}>
          Increment
        </button>
        <button className="decrement-button" onClick={decrement}>
          Decrement
        </button>
      </div>
     
    </div>
  );
}

export default App;
