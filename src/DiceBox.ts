import * as THREE from "three";
import * as CANNON from "cannon-es";
import { DiceNotation } from './DiceNotation.js';
import { DiceFactory } from './DiceFactory.js';
import { DiceColors } from './DiceColors.js';
import { THEMES } from './const/themes.js';
import { debounce } from "./helpers.js";

class DiceBox {
    private initialized: boolean = false;
    private container: HTMLElement;
    private dimensions: THREE.Vector2;
    private running: boolean | number = false;
    private rolling: boolean = false;
    private threadid: any;
    private display: {
        currentWidth: number | null;
        currentHeight: number | null;
        containerWidth: number | null;
        containerHeight: number | null;
        aspect: number | null;
        scale: number | null;
    };
    private cameraHeight: {
        max: number | null;
        close: number | null;
        medium: number | null;
        far: number | null;
    };
    private scene: THREE.Scene;
    private world: CANNON.World;
    private dice_body_material: CANNON.Material;
    private sounds_table: { [key: string]: any[] };
    private sounds_dice: any[];
    private lastSoundType: string = '';
    private lastSoundStep: number = 0;
    private lastSound: number = 0;
    private iteration: number;
    private renderer: THREE.WebGLRenderer;
    private barrier: any;
    private camera: THREE.PerspectiveCamera;
    private light: THREE.SpotLight;
    private light_amb: THREE.HemisphereLight;
    private desk: THREE.Mesh;
    private box_body: { [key: string]: CANNON.Body };
    private bodies: any[] = [];
    private meshes: any[] = [];
    private diceList: any[] = [];
    private notationVectors: any = null;
    private dieIndex: number = 0;
    private soundDelay: number = 10;
    private animstate: string = '';
    private selector: {
        animate: boolean;
        rotate: boolean;
        intersected: any;
        dice: any[];
    };
    private DiceColors: DiceColors;
    private DiceFactory: DiceFactory;
    private surface: string;
    private colorData: any;
    private steps: number = 0;
    private framerate: number;
    private sounds: boolean;
    private volume: number;
    private shadows: boolean;
    private theme_surface: string;
    private sound_dieMaterial: string;
    private theme_customColorset: any;
    private theme_colorset: string;
    private theme_texture: string;
    private theme_material: string;
    private gravity_multiplier: number;
    private light_intensity: number;
    private baseScale: number;
    private strength: number;
    private iterationLimit: number;
    private color_spotlight: number;
    private assetPath: string;
    private onRollComplete: (results: any) => void;
    private onRerollComplete: (results: any) => void;
    private onAddDiceComplete: (results: any) => void;
    private onRemoveDiceComplete: (results: any) => void;
}

export { DiceBox }; 