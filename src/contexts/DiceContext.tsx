import React, { createContext, useEffect, useRef, useContext, MutableRefObject, RefObject, useState } from 'react';
import { DiceBox } from '../dice-box-threejs/DiceBox.js';

type DiceBoxConfig = {
  assetPath: string;
  theme: string;
  offscreen: boolean;
  children: React.ReactNode;
};

type DiceContextType = {
  diceBox: DiceBox | null;
  containerRef: RefObject<HTMLDivElement>;
  status: "loading" | "ready" | "error";
};

export const DiceContext = createContext<DiceContextType>({
  diceBox: null,
  containerRef: null,
  status: "loading",
});



export const DiceProvider = ({ children, ...config }: DiceBoxConfig) => {
  const diceBoxRef = useRef<DiceBox | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [status, setStatus] = useState<"loading" | "ready" | "error">("loading");
  useEffect(() => {
    if (status == 'ready' || !containerRef.current) {
      return;
    }
    try {
      diceBoxRef.current = new DiceBox(containerRef.current, config);
      diceBoxRef.current.initialize();
      setStatus("ready");
    } catch (error) {
      setStatus("error");
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
