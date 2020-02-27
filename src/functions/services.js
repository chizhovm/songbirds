const getColor = (color) => {
  let rgbColor;
  if (typeof color === 'string') {
    rgbColor = color.substring(0, color.length - 1).slice(4).split(' ,');
  } else rgbColor = color;
  if (rgbColor.length < 4) rgbColor.push('255');
  return `rgba(${rgbColor.join(', ')})`;
};

const isArraysEqual = (a, b) => {
  if (a.length !== b.length) return false;
  for (let i = 0; i < a.length; i += 1) {
    if (a[i] !== b[i]) return false;
  }
  return true;
};

export {
  getColor, isArraysEqual,
};
