export declare class DiceNotation {
  constructor(notation: string);
  get sets(): { count: number; type: string }[];
  get isValid(): boolean;
  get error(): string | null;
} 