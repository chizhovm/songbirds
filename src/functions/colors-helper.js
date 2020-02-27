const getColor = (color) => {
  let rgbColor;
  if (typeof color === 'string') {
    rgbColor = color.substring(0, color.length - 1).slice(4).split(' ,');
  } else rgbColor = color;
  if (rgbColor.length < 4) rgbColor.push('255');
  return `rgba(${rgbColor.join(', ')})`;
};

const setColor = (cColor, pColor, pColorItem, cColorItem) => {
  if (cColor === 'rgba(0, 0, 0, 0)') return pColor;
  const pItem = pColorItem;
  const cItem = cColorItem;
  pItem.style.backgroundColor = cColor;
  cItem.style.backgroundColor = pColor;
  return cColor;
};

const setGrayScale = (canvas) => {
  const imageData = canvas.workCanvas.getImageData(0, 0, canvas.fullSize, canvas.fullSize);
  for (let i = 0; i < imageData.data.length; i += 4) {
    const avg = (imageData.data[i] + imageData.data[i + 1] + imageData.data[i + 2]) / 3;
    imageData.data[i] = avg; // red
    imageData.data[i + 1] = avg; // green
    imageData.data[i + 2] = avg; // blue
  }
  canvas.workCanvas.putImageData(imageData, 0, 0);
};

export {
  getColor, setColor, setGrayScale,
};
