function resizeText() {
  const p = document.querySelector('p');
  let fontSize = 16;
  const bodyWidth = window.innerWidth;
  const bodyHeight = window.innerHeight;

  p.style.fontSize = `${fontSize}vw`;

  while ((p.offsetWidth > bodyWidth || p.offsetHeight > bodyHeight) && fontSize > 0.5) {
    fontSize -= 0.1;
    p.style.fontSize = `${fontSize}vw`;
  }
}

window.addEventListener('resize', resizeText);
window.addEventListener('load', resizeText);
