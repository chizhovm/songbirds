import { getColor, isArraysEqual } from './services';

const erase = (canvas, x, y, penSize) => {
  canvas.clearRect(x, y, penSize, penSize);
};

const draw = (canvas, color, x, y, penSize) => {
  const c = canvas;
  c.fillStyle = color;
  c.fillRect(x, y, penSize, penSize);
};

const line = (coordX0, coodrY0, x1, y1, canvas, color, penSize, delta) => {
  let x0 = coordX0;
  let y0 = coodrY0;
  const dx = Math.abs(x1 - x0);
  const dy = Math.abs(y1 - y0);
  const sx = (x0 < x1) ? delta : -delta;
  const sy = (y0 < y1) ? delta : -delta;
  const c = canvas;
  let err = dx - dy;
  // eslint-disable-next-line no-constant-condition
  while (true) {
    c.fillStyle = color;
    c.fillRect(x0, y0, penSize, penSize);
    if ((x0 === x1) && (y0 === y1)) break;
    const e2 = 2 * err;
    if (e2 > -dy) { err -= dy; x0 += sx; }
    if (e2 < dx) { err += dx; y0 += sy; }
  }
};

const eraseLine = (coordX0, coodrY0, x1, y1, canvas, color, penSize, delta) => {
  let x0 = coordX0;
  let y0 = coodrY0;
  const dx = Math.abs(x1 - x0);
  const dy = Math.abs(y1 - y0);
  const sx = (x0 < x1) ? delta : -delta;
  const sy = (y0 < y1) ? delta : -delta;
  const c = canvas;
  let err = dx - dy;
  // eslint-disable-next-line no-constant-condition
  while (true) {
    c.clearRect(x0, y0, penSize, penSize);
    if ((x0 === x1) && (y0 === y1)) break;
    const e2 = err;
    if (e2 > -dy) { err -= dy; x0 += sx; }
    if (e2 < dx) { err += dx; y0 += sy; }
  }
};

const fill = (workCanvas, color, x, y, canvasSize, penSize) => {
  let coordinateX = x;
  let coordinateY = y;
  const targetColor = getColor(workCanvas.getImageData(coordinateX, coordinateY, 1, 1).data);
  if (targetColor === color) return;
  const pixelStack = [[coordinateX, coordinateY]];
  let nextPixel;

  while (pixelStack.length) {
    nextPixel = pixelStack.pop();
    coordinateX = nextPixel[0];
    coordinateY = nextPixel[1];

    while (coordinateY > 0
        && getColor(workCanvas.getImageData(coordinateX, (coordinateY - penSize), 1, 1).data)
        === targetColor) {
      if (pixelStack.length > 0
        && isArraysEqual(pixelStack[pixelStack.length - 1], [coordinateX, coordinateY])) {
        pixelStack.pop();
      }
      coordinateY -= penSize;
    }

    while (coordinateY < (canvasSize)
      && getColor(workCanvas.getImageData(coordinateX, (coordinateY), 1, 1).data)
      === targetColor) {
      draw(workCanvas, color, coordinateX, coordinateY, penSize);

      if (coordinateX > 0
          && getColor(workCanvas.getImageData(coordinateX - penSize, coordinateY, 1, 1).data)
          === targetColor) {
        pixelStack.push([coordinateX - penSize, coordinateY]);
      }
      if (coordinateX < canvasSize
          && getColor(workCanvas.getImageData(coordinateX + penSize, coordinateY, 1, 1).data)
          === targetColor) {
        pixelStack.push([coordinateX + penSize, coordinateY]);
      }
      coordinateY += penSize;
    }
  }
};

const setActive = (tool, activeTool, activeClass, target, cursor) => {
  const tg = target;
  tg.style.cursor = cursor;
  if (activeTool) activeTool.classList.remove(activeClass);
  tool.classList.add(activeClass);
  return tool;
};

export {
  erase, draw, fill, setActive, line, eraseLine,
};
