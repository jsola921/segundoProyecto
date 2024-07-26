gsap.config({
	trialWarn: false
});

gsap.registerPlugin(SplitText);
gsap.registerPlugin(ScrambleTextPlugin) 

const text = document.querySelector('header h1');
const img1 = document.querySelector('.chair1');
const img2 = document.querySelector('.chair2');
const img3 = document.querySelector('.chair3');
const img4 = document.querySelector('.chair4');
const img5 = document.querySelector('.chair5');
const img6 = document.querySelector('.chair6');
const img7 = document.querySelector('.chair7');
const overp = document.querySelector('.over-header p');
const menuElement = document.querySelector('.menu');
const menuLine1 = document.querySelector('.menu-line1');
const menuLine2 = document.querySelector('.menu-line2');
const menuLine3 = document.querySelector('.menu-line3');

const split = new SplitText(text, {
	type: 'lines'
});

const tl = gsap.timeline({
	paused: false,
});



tl
  .add('start')
  .set(split.lines, {
    yPercent: 80,
  })
  .set([menuLine1, menuLine2, menuLine3], {
    width: '0px',
    autoAlpha: 0,
  })


const loadImages = gsap.timeline({
	paused: false,
});

loadImages
  .set([img1, img2, img3, img4, img5, img6, img7], {
    scale: 0.5,
    opacity: 0
  })
  .to(img1, {
    scale: 1,
    opacity: 1,
    duration: 1,
    ease: 'power2.inOut'
  })
  .to(img2, {
    scale: 1,
    opacity: 1,
    duration: 1,
    ease: 'power1.inOut'
  }, "-=0.5") 
  .to(img3, {
    scale: 1,
    opacity: 1,
    duration: 1,
    ease: 'power1.inOut'
  }, "-=0.5")
  .to(img4, {
    scale: 1,
    opacity: 1,
    duration: 1,
    ease: 'power1.inOut'
  }, "-=0.5")
  .to(img5, {
    scale: 1,
    opacity: 1,
    duration: 1,
    ease: 'power1.inOut'
  }, "-=0.5")
  .to(img6, {
    scale: 1,
    opacity: 1,
    duration: 1,
    ease: 'power1.inOut'
  }, "-=0.5")
  .to(img7, {
    yPercent:-6,
    height:'90vh',
    scale: 1,
    opacity: 1,
    duration: 1,
    ease: 'power1.inOut'
  }, "=0.2")
  .to([img1, img2, img3, img4, img5, img6], {
    scale: 1,
    opacity: 0,
    duration: 0.1,
    ease: 'power1.inOut'
  }, "-=0.1")
  .to(img7, {
    yPercent: 18, 
    height:'73vh',
    scale: 1,
    opacity: 1,
    duration: 1,
    ease: 'sine.inOut'
  }, "-=0.20")
  .to(split.lines, {
    yPercent: 16,
    x:'6px',
    stagger: 0.01,
    duration: 0.8,
    ease: 'sine.inOut'
  }, 'start')
  .to(menuLine1, {
    width: '40px',
    autoAlpha: 1,
    stagger: 0.01,
    duration: 0.8,
    ease: 'power1.inOut'
  }, 'start')
  .to(menuLine2, {
    width: '44px',
    autoAlpha: 1,
    stagger: 0.01,
    duration: 1,
    ease: 'power1.inOut'
  }, 'start')
  .to(menuLine3, {
    width: '32px',
    autoAlpha: 1,
    stagger: 0.01,
    duration: 1,
    ease: 'power1.inOut'
  }, 'start')


loadImages.play();