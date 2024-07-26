// Asegúrate de registrar ScrollSmoother
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

ScrollSmoother.create({
  wrapper: ".full-wrapper",
  content: ".wrapper",
  smooth: 1.5,
  effects: true
});
