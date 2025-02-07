import { useEffect, useRef, useState } from "react";
import DiceBox from "@3d-dice/dice-box-threejs";
import "./App.css";

function App() {
  const containerRef = useRef(null);
  const [diceBox, setDiceBox] = useState(null);
  const [rolling, setRolling] = useState(false);
  const [results, setResults] = useState([]);

  useEffect(() => {
    const box = new DiceBox(".dice-container", {
      assetPath: "/assets/",
      theme: "default",
      offscreen: false,
    });

    box.initialize().then(() => {
      setDiceBox(box);
    });
  }, []);

  const handleRoll = async () => {
    if (!diceBox || rolling) return;

    setRolling(true);
    const results = await diceBox.roll("2d6 + 1d20");
    setResults(results);
    setRolling(false);
  };

  return (
    <div className="app">
      <div className="dice-container" ref={containerRef}></div>
      <div className="controls">
        <button onClick={handleRoll} disabled={!diceBox || rolling}>
          {rolling ? "Rolling..." : "Roll 2d6 + 1d20"}
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
