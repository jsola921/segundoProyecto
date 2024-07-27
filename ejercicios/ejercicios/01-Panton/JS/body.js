
gsap.registerPlugin(ScrollTrigger, SplitText);


const splitText = new SplitText(".texto-incial p", {type: "words"});

// Animación para img1
gsap.fromTo(splitText.words, 
  {
    opacity: 0.5 
  }, 
  { 
    opacity: 1, 
    duration: 0.5, 
    stagger: 0.5,
    scrollTrigger: {
      trigger: ".texto-incial p",
      start: "top 70%",
      end: "bottom 50%",
      scrub: true,

    }
  }
);


// last update img1
gsap.fromTo(".img1", 
  {
    opacity: 0,
    y: 100
  }, 
  {
    opacity: 1,
    y: 0,
    scrollTrigger: {
      trigger: ".img1",
      start: "top 85%",
      end: "top 20%",
      scrub: true,

    }
  }
);

// last update img2
gsap.fromTo(".img2", 
  {
    opacity: 0,
    y: -100
  }, 
  {
    opacity: 1,
    y: 0,
    scrollTrigger: {
      trigger: ".img2",
      start: "top 85%",
      end: "top 20%",
      scrub: true,

    }
  }
);

// cambio de imagenes side menu
document.addEventListener("DOMContentLoaded", () => {
  const menuItems = document.querySelectorAll(".side-menu li");
  const img1 = document.querySelector(".img1 img");
  const img2 = document.querySelector(".img2 img");

  menuItems.forEach(item => {
    item.addEventListener("click", () => {
      const newImg1 = item.getAttribute("data-img1");
      const newImg2 = item.getAttribute("data-img2");

      img1.src = newImg1;
      img2.src = newImg2;
    });
  });
});

