import { Platform } from 'react-native';

export async function createCanvas() {
  if (Platform.OS === 'web') {
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d", { alpha: true });
    return { canvas, context };
  } else {
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");
    return { canvas, context };
  }
}

