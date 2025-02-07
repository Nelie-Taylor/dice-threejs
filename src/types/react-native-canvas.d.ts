declare global {
  const ReactNativeCanvas: {
    Canvas: typeof import('react-native-canvas').default;
  };
}

declare module 'react-native-canvas' {
  interface CanvasGradient {
    addColorStop(offset: number, color: string): void;
  }

  interface CanvasPattern {
    setTransform(transform?: DOMMatrix2DInit): void;
  }

  interface DOMMatrix2DInit {
    a?: number;
    b?: number;
    c?: number;
    d?: number;
    e?: number;
    f?: number;
    m11?: number;
    m12?: number;
    m21?: number;
    m22?: number;
    m41?: number;
    m42?: number;
  }

  interface CanvasRenderingContext2D {
    canvas: Canvas;
    fillStyle: string | CanvasGradient | CanvasPattern;
    font: string;
    globalAlpha: number;
    globalCompositeOperation: string;
    lineCap: string;
    lineJoin: string;
    lineWidth: number;
    strokeStyle: string | CanvasGradient | CanvasPattern;
    textAlign: string;
    textBaseline: string;

    clearRect(x: number, y: number, width: number, height: number): void;
    fillRect(x: number, y: number, width: number, height: number): void;
    fillText(text: string, x: number, y: number, maxWidth?: number): void;
    measureText(text: string): { width: number };
    rotate(angle: number): void;
    strokeText(text: string, x: number, y: number, maxWidth?: number): void;
    translate(x: number, y: number): void;
    drawImage(image: any, sx: number, sy: number, sw?: number, sh?: number, dx?: number, dy?: number, dw?: number, dh?: number): void;
  }

  export default class Canvas {
    getContext(contextType: '2d', options?: { alpha?: boolean }): CanvasRenderingContext2D;
    width: number;
    height: number;
  }
}

export {};
