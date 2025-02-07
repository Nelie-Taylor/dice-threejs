import { DICE } from "./const/dice";

const DEFAULT_CONFIG = {
  name: "",
  scale: 1,
  font: "Arial",
  color: "",
  labels: [],
  valueMap: [],
  values: [],
  normals: [],
  mass: 300,
  inertia: 13,
  geometry: null,
  display: "values",
  system: "d20",
};

export class DicePreset {
  #shape;
  #type;
  #labels = [];
  #normals = [];
  #valueMap = [];
  #values = [];
  #font;
  #color;
  #mass;
  #inertia;
  #scale;
  #geometry;
  #display;
  #system;
  #bumpMaps;

  constructor(name) {
    if (!DICE[name]) {
      throw new Error("Dice type unavailable");
    }

    // Initialize private fields from DICE configuration
    const config = { ...DEFAULT_CONFIG, ...DICE[name] };
    this.#shape = config.type || name;
    this.#type = name;
    this.#font = config.font;
    this.#color = config.color;
    this.#mass = config.mass;
    this.#inertia = config.inertia;
    this.#scale = config.scale;
    this.#geometry = config.geometry;
    this.#display = config.display;
    this.#system = config.system;
    this.#bumpMaps = config.bumpMaps;

    // Initialize arrays
    this.setLabels(config.labels);
    this.setValues(config.values[0], config.values[1], config.values[2]);
    this.setValueMap(config.valueMap);

    if (this.#bumpMaps) {
      this.setBumpMaps(this.#bumpMaps);
    }
  }

  // Getters
  get shape() {
    return this.#shape;
  }

  get type() {
    return this.#type;
  }

  get labels() {
    return this.#labels;
  }

  get normals() {
    return this.#normals;
  }

  get valueMap() {
    return this.#valueMap;
  }

  get values() {
    return this.#values;
  }

  get font() {
    return this.#font;
  }

  get color() {
    return this.#color;
  }

  get mass() {
    return this.#mass;
  }

  get inertia() {
    return this.#inertia;
  }

  get scale() {
    return this.#scale;
  }

  get geometry() {
    return this.#geometry;
  }

  get display() {
    return this.#display;
  }

  get system() {
    return this.#system;
  }

  get bumpMaps() {
    return this.#bumpMaps;
  }

  setValues(min = 1, max = 20, step = 1) {
    this.#values = Array.from(
      { length: Math.floor((max - min) / step) + 1 },
      (_, i) => min + i * step
    );
  }

  setValueMap(map) {
    this.#valueMap = this.#values.reduce((acc, value) => {
      if (map[value] != null) {
        acc[value] = map[value];
      }
      return acc;
    }, {});
  }

  registerFaces(faces, type = "labels") {
    const targetArray = type === "labels" ? this.#labels : this.#normals;

    targetArray.unshift("");
    if (!["d2", "d10"].includes(this.#shape)) {
      targetArray.unshift("");
    }

    if (this.#shape === "d4") {
      const [a, b, c, d] = faces;
      this.#labels = [
        [[], [0, 0, 0], [b, d, c], [a, c, d], [b, a, d], [a, b, c]],
        [[], [0, 0, 0], [b, c, d], [c, a, d], [b, d, a], [c, b, a]],
        [[], [0, 0, 0], [d, c, b], [c, d, a], [d, b, a], [c, a, b]],
        [[], [0, 0, 0], [d, b, c], [a, d, c], [d, a, b], [a, c, b]],
      ];
    } else {
      targetArray.push(...faces);
    }
  }

  setLabels(labels) {
    this.#loadTextures(labels, this.registerFaces.bind(this), "labels");
  }

  setBumpMaps(normals) {
    this.#loadTextures(normals, this.registerFaces.bind(this), "bump");
  }

  async #loadTextures(textures, callback, type) {
    const TEXTURE_REGEX = /\.(png|jpe?g|gif|webp)$/i;

    const hasTextures = textures.some(
      (texture) => texture && TEXTURE_REGEX.test(texture)
    );

    if (!hasTextures) {
      callback(textures, type);
      return;
    }

    try {
      const loadedTextures = await Promise.all(
        textures.map(async (texture, index) => {
          if (!texture || !TEXTURE_REGEX.test(texture)) {
            return texture;
          }

          const img = new Image();
          await new Promise((resolve, reject) => {
            img.onload = resolve;
            img.onerror = reject;
            img.src = texture;
          });
          return img;
        })
      );

      callback(loadedTextures, type);
    } catch (error) {
      console.error("Error loading textures:", error);
      throw error;
    }
  }
}
