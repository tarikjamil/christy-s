// smooth scroll
const lenis = new Lenis({
    duration: 1, // Decrease the duration for faster scrolling (original: 1.2)
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // https://www.desmos.com/calculator/brs54l4xou
    direction: "vertical", // vertical, horizontal
    gestureDirection: "vertical", // vertical, horizontal, both
    smooth: true,
    mouseMultiplier: 1.1, // Increase the multiplier for more sensitive scrolling (original: 1)
    smoothTouch: false,
    touchMultiplier: 3, // Increase the multiplier for faster touch scrolling (original: 2)
    infinite: false
  });
  
  //get scroll value
  lenis.on("scroll", ({ scroll, limit, velocity, direction, progress }) => {});
  
  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  
  requestAnimationFrame(raf);

// split start
let text;
let textline;

// Split the text up
function runSplit() {
  text = new SplitType("[animation='split-stagger-text']", {
    types: "lines, words",
    lineClass: "split-line",
    wordClass: "is--scroll-intoview-scrub"
  });
}

function runSplit2() {
    text = new SplitType("[animation='split-stagger-line']", {
      types: "lines",
      lineClass: "split-line",
    });
  }

runSplit();
runSplit2();


// split type ends

gsap.registerPlugin(ScrollTrigger);

// page load starts
gsap.to(".main-wrapper", {
    opacity: 1,
    ease: "Quint.easeOut",
    duration: 0.5
});
gsap.from("[animation='loadingclick']", {
    opacity: 0,
    y: "20rem",
    ease: "Quint.easeOut",
    duration: 1,
    stagger: {
        each: 0.1
      },
    delay: 0.75 // delay in seconds
});
// split text
  $("[animation='split-stagger-text']").each(function (index) {

    let target = $(this).find(".is--scroll-intoview-scrub");
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: $(this),
        start: "top bottom-=100",
        end: "bottom center",
        scrub: true,
      }
    });
  
    tl.from(
      target,
      {
        y: "100%",
        opacity: 0,
        ease: "Quint.easeOut",
        duration: 1,
        stagger: {
          each: 0.1,
          from: "start"
        }
      },
      0
    );
    
  });

  $("[animation='split-stagger-line']").each(function (index) {

    let target = $(this).find(".split-line");
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: $(this),
        start: "top bottom-=100",
        end: "bottom center",
        scrub: true,
      }
    });
  
    tl.from(
      target,
      {
        y: "20rem",
        opacity: 0,
        ease: "Quint.easeOut",
        duration: 1,
        stagger: {
          each: 0.1,
          from: "start"
        }
      },
      0
    );
    
  });

  $("[animation='fade-stagger']").each(function (index) {
    let target = $(this).find("[animation='fade-stagger-el']");
  
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: $(this),
        start: "top bottom-=100",
        end: "bottom center",        
      }
    });
  
    tl.from(
      target,
      {
        y: "100rem",
        opacity: 0,
        ease: "Quint.easeOut",
        duration: 1,
        stagger: {
            each: 0.1,
            from: "start"
        }
      },
      0
    );
  });

  $("[animation='parallax-wrapper']").each(function (index) {
    let target = $(this).find("[animation='parallax']");
  
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: $(this),
        start: "top bottom",
        end: "bottom top", 
        scrub: true,       
      }
    });
  
    tl.from(
      target,
      {
        y: "-10%"
      },
      0
    );
  });

  $("[animation='bam-parent']").each(function (index) {
    let persona = $(this).find(".bam--persona");
    let bubble = $(this).find(".bam--text-wrapper']");
    let crack = $(this).find(".home--bam-shape']");
  
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: $(this),
        start: "top bottom-=100",
        end: "bottom center",
        scrub: true,      
      }
    });
  
    tl.from(
      persona,
      {
        x: "-100rem",
        opacity: 0,
        ease: "Quint.easeOut",
        duration: 1,
      },
      0
    );
    tl.from(
        bubble,
        {
          scale: 0,
          opacity: 0,
          ease: "Quint.easeOut",
          duration: 1,
        },
        0
    );
    tl.from(
        crack,
        {
            scale: 0,
            opacity: 0,
            ease: "Quint.easeOut",
            duration: 1,
          },
        0
    );
  });
  
  $(".menu--bg").on("click", function () {
    $(".menu--link").click();
  });