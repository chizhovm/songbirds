const getImageLink = async (key) => {
  const url = `https://api.unsplash.com/photos/random?query=town,${key}&client_id=12576695bbf5567d1e8e843a13596f3a9c1eff04fb3ea41c59440fed64ec5eda`;
  const image = new Image();
  image.crossOrigin = 'Anonymous';
  const responce = await fetch(url);
  const res = await responce.json();
  image.src = await res.urls.small;
  return image;
};

const getImageSize = (canvasSize, img) => {
  const image = img;
  let height;
  let width;
  let x;
  let y;
  if (image.naturalHeight > image.naturalWidth) {
    height = canvasSize;
    width = Math.floor(image.naturalWidth * canvasSize / image.naturalHeight);
    y = 0;
    x = Math.floor((height - width) / 2);
  } else {
    width = canvasSize;
    height = Math.floor(image.naturalHeight * canvasSize / image.naturalWidth);
    y = Math.floor((width - height) / 2);
    x = 0;
  }
  return [x, y, width, height];
};

const setImageToCanvas = async (canvas, key) => {
  const image = await getImageLink(key);
  image.onload = () => {
    const size = getImageSize(canvas.fullSize, image);
    canvas.workCanvas.drawImage(image, size[0], size[1], size[2], size[3]);
  };
};

export {
  getImageSize, getImageLink, setImageToCanvas,
};
