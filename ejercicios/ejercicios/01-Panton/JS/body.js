
gsap.registerPlugin(ScrollTrigger, SplitText);


const splitText = new SplitText(".texto-incial p", {type: "words"});

gsap.fromTo(splitText.words, 
  {
    opacity: 0.5 
  }, 
  { 
    opacity: 1, 
    duration: 1, 
    stagger: 0.5,
    scrollTrigger: {
      trigger: ".texto-incial p",
      start: "top 90%",
      end: "bottom 30%",
      scrub: true,
      markers: true // Esto es solo para depuración, puedes quitarlo cuando hayas terminado
    }
  }
);
