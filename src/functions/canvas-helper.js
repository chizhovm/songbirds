const canvasGetCoordinate = (coordinate, canvasScalingFactor,
  canvasScale) => Math.floor(coordinate / canvasScalingFactor) * canvasScale;

const canvasSetSize = (c, cS) => {
  const cSize = cS;
  c.setAttribute('width', cSize);
  c.setAttribute('height', cSize);
  return cSize;
};

const loadCanvasFromLocalStorage = (canvas, canvasSize) => {
  const image = new Image();
  image.src = localStorage.getItem('image');
  image.onload = () => {
    canvas.drawImage(image, 0, 0, canvasSize, canvasSize);
  };
};

const saveCanvasToLocalStorage = (canvas) => {
  const image = canvas.toDataURL('image/jpg');
  localStorage.setItem('image', image);
};

export {
  canvasGetCoordinate,
  canvasSetSize,
  loadCanvasFromLocalStorage,
  saveCanvasToLocalStorage,
};
