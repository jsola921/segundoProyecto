gsap.config({
  trialWarn: false,
})

function map(x, a1, a2, b1, b2) {
  return ((x - a1) * (b2 - b1)) / (a2 - a1) + b1
}
function clamp(v, min, max) {
  return Math.min(max, Math.max(min, v))
}
function lerp(v1, v2, alpha) {
  return v1 + (v2 - v1) * alpha
}
// // Variables
const cursor = document.querySelector('.cursor');
const positionX = {
  target:0,
  current:0,
}
const positionY = {
  target:0,
  current:0,
}


// // Events
window.addEventListener('mousemove', (e) => {
  positionX.target = e.clientX;
  positionY.target = e.clientY;
})


// // Position



// // Flag

const update = () =>  {
  positionX.current = lerp(positionX.current, positionX.target, 0.3)
  positionY.current = lerp(positionY.current, positionY.target, 0.3)

  cursor.style.transform = `translate(${positionX.current}px, ${positionY.current}px)`

}





const animate = () => {
  update()
  requestAnimationFrame(animate)
}
animate()

