interface Theme {
  name: string;
  textureFile?: string;
  material?: string;
  color?: number;
  roughness?: number;
  metalness?: number;
  envMapIntensity?: number;
}

interface ThemeCollection {
  [key: string]: Theme;
}

export const THEMES: ThemeCollection = {
  'green-felt': {
    name: 'green-felt',
    textureFile: 'green-felt.png'
  },
  'blue-felt': {
    name: 'blue-felt',
    textureFile: 'blue-felt.png'
  },
  'red-felt': {
    name: 'red-felt',
    textureFile: 'red-felt.png'
  },
  'white-leather': {
    name: 'white-leather',
    textureFile: 'white-leather.png'
  },
  'brown-leather': {
    name: 'brown-leather',
    textureFile: 'brown-leather.png'
  },
  'black-leather': {
    name: 'black-leather',
    textureFile: 'black-leather.png'
  },
  'glass': {
    name: 'glass',
    material: 'glass',
    color: 0xffffff,
    roughness: 0.0,
    metalness: 0.0,
    envMapIntensity: 1
  },
  'wood': {
    name: 'wood',
    textureFile: 'wood.png'
  }
}; 