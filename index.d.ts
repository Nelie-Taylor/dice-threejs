import { DiceBoxConfig } from './src/types';

declare class DiceBoxThreejs {
  constructor(element_container: string, options?: Partial<DiceBoxConfig>);
  initialize(): Promise<void>;
  roll(notation: string): Promise<string[]>;
  reroll(diceIds: string[]): Promise<string[]>;
  add(notation: string): Promise<string[]>;
  remove(diceIds: string[]): Promise<void>;
  clearDice(): void;
  getDiceResults(id?: string): { [key: string]: number[] };
}

export = DiceBoxThreejs; 