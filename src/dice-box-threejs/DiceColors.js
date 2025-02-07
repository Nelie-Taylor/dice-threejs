import { TEXTURELIST } from "./const/texturelist";
import { COLORSETS } from "./const/colorsets";

export class DiceColors {
  #colorsets = new Map();
  #assetPath;

  constructor(options = {}) {
    this.#assetPath = options.assetPath;
  }

  async #loadImage(src) {
    try {
      const img = new Image();
      img.crossOrigin = "anonymous";
      img.src = this.#assetPath + src;

      await new Promise((resolve, reject) => {
        img.onload = resolve;
        img.onerror = reject;
      });

      return img;
    } catch (error) {
      console.error("Unable to load image texture:", error);
      throw new Error("Image loading failed");
    }
  }

  async #imageLoader(data) {
    if (Array.isArray(data)) {
      return Promise.all(data.map((item) => this.#imageLoader(item)));
    }

    const result = { ...data };

    if (result.source && result.source !== "") {
      result.texture = await this.#loadImage(result.source);
    }

    if (result.source_bump && result.source_bump !== "") {
      result.bump = await this.#loadImage(result.source_bump);
    }

    return result;
  }

  #getTexture(textureName) {
    if (Array.isArray(textureName)) {
      return textureName.map((name) => this.#getTexture(name));
    }

    return TEXTURELIST[textureName] ?? TEXTURELIST.none;
  }

  async getColorSet(options) {
    const setName = typeof options === "string" ? options : options?.colorset;

    if (this.#colorsets.has(setName)) {
      return this.#colorsets.get(setName);
    }

    const colorset = { ...COLORSETS[setName] };
    const texture = options?.texture ?? colorset.texture;

    // Get and load texture data
    colorset.texture = await this.#imageLoader(this.#getTexture(texture));

    // Apply material type if specified
    if (options?.material) {
      colorset.texture.material = options.material;
    }

    // Cache for later use
    this.#colorsets.set(setName, colorset);

    return colorset;
  }

  async makeColorSet(options = {}) {
    if (this.#colorsets.has(options.name)) {
      return this.#colorsets.get(options.name);
    }

    const defaultSet = COLORSETS.white;
    const colorset = {
      ...defaultSet,
      ...options,
      name:
        options.name?.toLowerCase() === "white"
          ? Date.now().toString()
          : options.name,
    };

    // Get and load texture data
    const texture = this.#getTexture(colorset.texture);
    colorset.texture = await this.#imageLoader(texture);

    if (options.material) {
      colorset.texture.material = options.material;
    }

    // Cache for later use
    this.#colorsets.set(colorset.name, colorset);

    return colorset;
  }
}
