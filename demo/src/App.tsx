import { useEffect, useRef, useState } from 'react';
import DiceBoxThreejs from '@3d-dice/dice-box-threejs';
import './App.css';

function App() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [box, setBox] = useState<DiceBoxThreejs | null>(null);
  const [rolling, setRolling] = useState(false);
  const [results, setResults] = useState<string[]>([]);

  useEffect(() => {
    if (!containerRef.current || box) return;

    const diceBox = new DiceBoxThreejs('#dice-box', {
      assetPath: '/assets/',
      theme_surface: 'green-felt',
      theme_material: 'glass',
      light_intensity: 0.7,
      baseScale: 100,
      strength: 1,
      onRollComplete: () => {
        setRolling(false);
      }
    });

    diceBox.initialize().then(() => {
      setBox(diceBox);
    });
  }, [containerRef, box]);

  const handleRoll = async () => {
    if (!box || rolling) return;
    setRolling(true);
    const results = await box.roll('2d20');
    setResults(results);
  };

  return (
    <div className="App">
      <div id="dice-box" ref={containerRef}></div>
      <div className="controls">
        <button onClick={handleRoll} disabled={rolling || !box}>
          {rolling ? 'Rolling...' : 'Roll 2d20'}
        </button>
        {results.length > 0 && (
          <div className="results">
                        Results: {results.join(', ')}
          </div>
        )}
      </div>
    </div>
  );
}

export default App; 