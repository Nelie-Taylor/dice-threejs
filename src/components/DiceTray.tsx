import { useEffect, useRef } from 'react';
import { View } from 'react-native';
import { useDice } from '../contexts/DiceContext.js';

export function DiceTray() {
  const { containerRef } = useDice();

  return <View ref={containerRef}></View>;
}
