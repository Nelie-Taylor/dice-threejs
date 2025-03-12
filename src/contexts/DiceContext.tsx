import React, { createContext, useEffect, useRef, useContext, RefObject, useState } from 'react';
import { DiceBox } from '../dice-box-threejs/DiceBox.js';
import { View } from 'react-native';

type DiceBoxConfig = {
  assetPath: string;
  theme: string;
  offscreen: boolean;
  children: React.ReactNode;
};

type DiceContextStatus = 'loading' | 'initializing' | 'ready' | 'error';

type DiceContextType = {
  diceBox: DiceBox | null;
  containerRef: RefObject<View>;
  status: DiceContextStatus;
  setStatus: (status: DiceContextStatus) => void;
};

export const DiceContext = createContext<DiceContextType>({
  diceBox: null,
  containerRef: null,
  status: 'loading',
  setStatus: () => { },
});

export const DiceProvider = ({ children, ...config }: DiceBoxConfig) => {
  const diceBoxRef = useRef<DiceBox | null>(null);
  const containerRef = useRef<View>(null);
  const [status, setStatus] = useState<DiceContextStatus>('loading');
  useEffect(() => {
    if (diceBoxRef.current || !containerRef.current) {
      return;
    }
    try {
      diceBoxRef.current = new DiceBox(containerRef.current, config);
      setStatus('initializing');
    } catch (error) {
      setStatus('error');
    }
  }, [containerRef, config, status]);

  return (
    <DiceContext.Provider value={{ diceBox: diceBoxRef.current, containerRef, status, setStatus }}>
      {children}
    </DiceContext.Provider>
  );
};
export const useDice = () => {
  return useContext(DiceContext);
};

