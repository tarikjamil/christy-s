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
gsap.from(".logo--loading", {
    opacity: 0,
    y: "20rem",
    ease: "Quint.easeOut",
    duration: 1,
    delay: 1
});

// page finish loading
window.addEventListener("load", function() {
    gsap.to(".loading-parent", {
        opacity: 0,
        ease: "Quint.easeOut",
        duration: 1,
        delay: 4 // delay in seconds
    });
    gsap.to(".loading--parent-second", {
        opacity: 1,
        ease: "Quint.easeOut",
        duration: 1,
        delay: 4 // delay in seconds
    });
    gsap.from("[animation='loading']", {
        opacity: 0,
        y: "20rem",
        ease: "Quint.easeOut",
        duration: 1,
        stagger: {
            each: 0.1
          },
        delay: 4 // delay in seconds
    });
    gsap.from("[animation='loading-navbar']", {
        opacity: 0,
        y: "-20rem",
        ease: "Quint.easeOut",
        duration: 1,
        stagger: {
            each: 0.1
          },
        delay: 4 // delay in seconds
    });
});


document.querySelector('.load--link').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default action of the link
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
        duration: 1,
        scrub: true,
        
      }
    });
  
    tl.from(
      target,
      {
        y: "100rem",
        opacity: 0,
        stagger: {
            each: 0.1,
            from: "start"
        }
      },
      0
    );
  });
  
  $(".menu--bg").on("click", function () {
    $(".menu--link").click();
  });