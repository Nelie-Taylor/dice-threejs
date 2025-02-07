import { useEffect } from 'react';
import { useDice } from '../contexts/DiceContext.js';

export function RollableScene() {
  const { diceBox, status, setStatus } = useDice();
  useEffect(() => {
    if (status !== 'initializing') {
      return;
    }
    diceBox.initialize();
    setStatus('ready');
  }, [diceBox, status, setStatus]);
  return null;
}
