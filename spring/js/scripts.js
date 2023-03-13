/* Проверка на моб девайс */
function iOS() {
  return (
    [
      "iPad Simulator",
      "iPhone Simulator",
      "iPod Simulator",
      "iPad",
      "iPhone",
      "iPod",
    ].includes(navigator.platform) ||
    // iPad on iOS 13 detection
    (navigator.userAgent.includes("Mac") && "ontouchend" in document)
  );
}
const isMobile =
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(
    navigator.userAgent
  ) || iOS();
if (isMobile) {
  document.querySelector("html").classList.add("is-mobile");
}

/* Проверка на safari */
const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
if (isSafari) {
  document.querySelector("html").classList.add("is-safari");
}

/* Проверка на ios */
const isIos = navigator.platform.match("Mac") !== null;
if (isIos) {
  document.querySelector("html").classList.add("is-OSX");
}

/* Проверка ширины экрана */
function checkInnerWidth(width) {
  if (window.innerWidth <= width) {
    return true;
  } else {
    return false;
  }
}

// 3D Scroll

let zSpacing = -1200,
  lastPos = zSpacing / 39,
  lastPos2 = zSpacing / 39,
  $frames = document.getElementsByClassName("frame"),
  frames = Array.from($frames),
  zVals = [],
  gallery = document.querySelector(".gallery");

function start() {
  let top = document.documentElement.scrollTop,
    delta = lastPos - top;

  lastPos = top;

  frames.forEach(function (n, i) {
    zVals.push(i * zSpacing + zSpacing);
    zVals[i] += delta * -5.5;
    let frame = frames[i],
      transform = `translateZ(${zVals[i]}px)`,
      opacity = zVals[i] < Math.abs(zSpacing) / 1.8 ? 1 : 0;
    frame.setAttribute(
      "style",
      `transform: ${transform}; opacity: ${opacity}; visibility: ${
        opacity <= 0 ? "hidden" : "visible"
      }`
    );
  });
}
start();

window.onscroll = function () {
  start();
};

/* window.scrollTo(0, 1); */
