import React, { createContext, useEffect, useRef, useContext, RefObject, useState } from 'react';
import { DiceBox } from '../dice-box-threejs/DiceBox.js';
import { View } from 'react-native';

type DiceBoxConfig = {
  assetPath: string;
  theme: string;
  offscreen: boolean;
  children: React.ReactNode;
};

type DiceContextStatus = 'loading' | 'ready' | 'error';

type DiceContextType = {
  diceBox: DiceBox | null;
  containerRef: RefObject<View>;
  status: DiceContextStatus;
};

export const DiceContext = createContext<DiceContextType>({
  diceBox: null,
  containerRef: null,
  status: 'loading',
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
      diceBoxRef.current.initialize().then(() => {
        setStatus('ready');
      });
    } catch (error) {
      setStatus('error');
    }
  }, [containerRef, config, status]);

  return (
    <DiceContext.Provider value={{ diceBox: diceBoxRef.current, containerRef, status }}>
      {children}
    </DiceContext.Provider>
  );
};
export const useDice = () => {
  const { diceBox, containerRef, status } = useContext(DiceContext);
  return { diceBox, containerRef, status };
};

