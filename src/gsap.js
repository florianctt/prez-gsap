gsap.registerPlugin(ScrollTrigger);
let tl = gsap.timeline()

/* Section 1 */

tl
  .from('.logo', 1, {xPercent: -100, opacity: 0})
  .to('.section-1 .bg', 4, {
    keyframes: {
      '0%': { opacity: 0, rotate: 0, scale: 1 },
      '50%': { opacity: 1, rotate: 360, scale: 1.2 },
      '100%': { opacity: 0, rotate: 0, scale: 1 },
    },
    repeat: -1
  }, '-=1')
  .from('.title', 1.5, {yPercent: -100, opacity: 0}, '-=2.5')
  .from('.text-left', .8, {x: 300, opacity: 0}, '-=2')
  .from('.text-right', .8, {x: -300, opacity: 0}, '-=.8')

/* Section 2 */

gsap.to('.section-2', {
  scrollTrigger: {
    trigger: '.section-2',
    start: 'top top-=50',
    end: '+=3000',
    pin: true,
    // markers: true
  }
})

let topCards = gsap.utils.toArray('.cards-1 .card')
let bottomCards = gsap.utils.toArray('.cards-2 .card')

gsap.to('.cards-1', {
  scrollTrigger: {
    trigger: '.section-2',
    start: 'top top',
    end: '+=2000',
    scrub: true,
  },
  xPercent: -125
})
gsap.to('.cards-2', {
  scrollTrigger: {
    trigger: '.section-2',
    start: 'top top',
    end: '+=2000',
    scrub: true,
  },
  xPercent: 125
})

/* Section 3 */

let blocks = gsap.utils.toArray('.block')

gsap.from(blocks, {
  scrollTrigger: {
    trigger: '.section-3',
    start: 'top bottom-=200',
    end: 'bottom top+=300',
    // scrub: true,
    // markers: true
  },
  opacity: 0,
  rotate: 90,
  stagger: .1
})

/* Section 4 */

gsap.to('.section-4', {
  scrollTrigger: {
    trigger: '.section-4',
    start: 'top top',
    end: '+=2000',
    pin: true,
    pinSpacing: false
  }
})
gsap.to('html', {
  scrollTrigger: {
    trigger: '.section-4',
    start: 'top bottom-=250',
    end: 'top top',
    scrub: true,
  },
  '--x': '0%'
})

/* Section-5 */

gsap.timeline({
  scrollTrigger: {
    trigger: '.section-5',
    start: 'top top',
    pin: true,
    scrub: true,
    end: '+=710'
  }
})
.to('.col-right', 1, {y: -710, ease: 'none'})

// Change words color on scroll
gsap.set('.section-5', {autoAlpha:1})
let words = gsap.utils.toArray('.word')

words.forEach(word => {
  const color = gsap.to(word, .5, {color: '#0c63bf', paused: true})
  
  ScrollTrigger.create({
    trigger: word,
    start: '50% 55%',
    end: '45% 45%',
    onEnter: () => {color.play()},
    onLeave: () => {color.reverse()},
    onLeaveBack: () => {color.reverse()},
    onEnterBack: () => {color.play()}
  })
})
