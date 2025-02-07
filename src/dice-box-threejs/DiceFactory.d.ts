import * as THREE from 'three';
import * as CANNON from 'cannon-es';
import { DiceMesh } from './types';

export declare class DiceFactory {
  constructor(scene: THREE.Scene, world: CANNON.World);
  createDice(type: string, size: number): DiceMesh;
} 