import { DICE } from './const/dice';

const defaults = {
  name: '',
  scale: 1,
  font: 'Arial',
  color: '',
  labels: [],
  valueMap: [],
  values: [],
  normals: [],
  mass: 300,
  inertia: 13,
  geometry: null,
  display: 'values',
  system: 'd20',
};

export class DicePreset {
  constructor(name) {
    if (!DICE.hasOwnProperty(name)) {
      return console.error('dice type unavailable');
    }
    Object.assign(this, defaults, DICE[name]);
    this.shape = DICE[name].type || name;
    this.type = name;

    this.setLabels(this.labels);
    this.setValues(this.values[0], this.values[1], this.values[2]);
    this.setValueMap(this.valueMap);
    if (this.bumpMaps) {
      this.setBumpMaps(this.bumpMaps);
    }
  }

  setValues(min = 1, max = 20, step = 1) {
    this.values = this.range(min, max, step);
  }

  setValueMap(map) {
    for (let i = 0; i < this.values.length; i++) {
      let key = this.values[i];
      if (map[key] != null) this.valueMap[key] = map[key];
    }
  }

  registerFaces(faces, type = 'labels') {
    let tab;

    if (type == 'labels') {
      tab = this.labels;
    } else {
      tab = this.normals;
    }

    tab.unshift('');
    if (!['d2', 'd10'].includes(this.shape)) tab.unshift('');

    if (this.shape == 'd4') {
      let a = faces[0];
      let b = faces[1];
      let c = faces[2];
      let d = faces[3];

      this.labels = [
        [[], [0, 0, 0], [b, d, c], [a, c, d], [b, a, d], [a, b, c]],
        [[], [0, 0, 0], [b, c, d], [c, a, d], [b, d, a], [c, b, a]],
        [[], [0, 0, 0], [d, c, b], [c, d, a], [d, b, a], [c, a, b]],
        [[], [0, 0, 0], [d, b, c], [a, d, c], [d, a, b], [a, c, b]],
      ];
    } else {
      Array.prototype.push.apply(tab, faces);
    }
  }

  setLabels(labels) {
    this.loadTextures(labels, this.registerFaces.bind(this), 'labels');
  }

  setBumpMaps(normals) {
    this.loadTextures(normals, this.registerFaces.bind(this), 'bump');
  }

  loadTextures(textures, callback, type) {
    const regexTexture = /\.(PNG|JPG|GIF|WEBP)$/i;
    const imgElements = Array(textures.length);
    let loadedImages = 0;

    const hasTextures = textures.some(
      (texture) => texture && texture.match(regexTexture)
    );
    if (!hasTextures) {
      callback(textures, type);
      return;
    }

    textures.forEach((texture, i) => {
      if (!texture || !texture.match(regexTexture)) {
        imgElements[i] = texture;
        if (++loadedImages >= textures.length) {
          callback(imgElements, type);
        }
        return;
      }

      const img = new Image();
      img.onload = () => {
        if (++loadedImages >= textures.length) {
          callback(imgElements, type);
        }
      };
      imgElements[i] = img;
      img.src = texture;
    });
  }

  range(start, stop, step = 1) {
    var a = [start],
      b = start;
    while (b < stop) {
      a.push((b += step || 1));
    }
    return a;
  }
}
