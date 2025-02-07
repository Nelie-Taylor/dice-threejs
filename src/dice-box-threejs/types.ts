import * as THREE from 'three';
import * as CANNON from 'cannon-es';

export interface DiceBoxConfig {
  assetPath?: string;
  framerate?: number;
  sounds?: boolean;
  volume?: number;
  color_spotlight?: number;
  shadows?: boolean;
  theme_surface?: string;
  sound_dieMaterial?: string;
  theme_customColorset?: string | null;
  theme_colorset?: string;
  theme_texture?: string;
  theme_material?: string;
  gravity_multiplier?: number;
  light_intensity?: number;
  baseScale?: number;
  strength?: number;
  iterationLimit?: number;
  onRollComplete?: () => void;
  onRerollComplete?: () => void;
  onAddDiceComplete?: () => void;
  onRemoveDiceComplete?: () => void;
}

export interface DiceVector {
  x: number;
  y: number;
}

export interface DiceMesh extends THREE.Mesh {
  body: CANNON.Body;
  dice_type: string;
  dice_set: string;
  material_name: string;
  material_id: number;
  result: number[];
  resultReason: string;
  diceId: string;
  notation: string;
  isVisible: boolean;
}

export interface ThemeConfig {
  surface?: string;
  material?: string;
  colorset?: string;
  texture?: string;
  customColorset?: string | null;
} 