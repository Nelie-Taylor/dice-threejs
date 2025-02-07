import { useEffect, useRef } from 'react';
import { useDice } from '../contexts/DiceContext.js';

export function DiceTray() {
  const { containerRef } = useDice();

  return <div ref={containerRef}></div>;
}
