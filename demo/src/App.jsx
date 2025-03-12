import { useState } from 'react';
import { RollableArea, useDice } from '@nelie-taylor/dice-threejs';
import PerformanceMonitor from './components/PerformanceMonitor';
import './App.css';

function App() {
  const [rolling, setRolling] = useState(false);
  const [results, setResults] = useState([]);
  const { diceBox } = useDice();

  const handleRoll = async () => {
    if (!diceBox || rolling) return;

    setRolling(true);
    const results = await diceBox.roll('2d6 + 1d20@6,6,20');
    setResults(results);
    setRolling(false);
  };

  return (
    <div className="app">
      <PerformanceMonitor />
      <RollableArea />
      <div className="controls">
        <button onClick={handleRoll} disabled={!diceBox || rolling}>
          {rolling ? 'Rolling...' : 'Roll 2d6 + 1d20'}
        </button>
        {results.length > 0 && (
          <div className="results">
            <h3>Results:</h3>
            {results.map((result, index) => (
              <p key={index}>
                {result.notation}: {result.value}
              </p>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
