import { useEffect, useRef } from 'react';
import { View } from 'react-native';
import { useDice } from '../contexts/DiceContext.js';

export function RollableArea() {
  const { containerRef } = useDice();

  return (
    <View
      ref={containerRef}
      style={{
        position: 'relative',
        width: '100%',
        height: 600,
        backgroundColor: 'red',
      }}
    />
  );
}
