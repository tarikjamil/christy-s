// split start
let text;
let textline;

// Split the text up
function runSplit() {
  text = new SplitType("[animation='split-stagger-text']", {
    types: "lines, words",
    lineClass: "split-line",
    wordClass: "is--scroll-intoview-scrub",
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

// On Page Load
function pageLoad() {
  let tl = gsap.timeline();
  tl.to(".main-wrapper", {
    opacity: 1,
    ease: "Quint.easeOut",
    duration: 0.5,
  });
  tl.from("[animation='loadingclick']", {
    opacity: 0,
    y: "20rem",
    ease: "Quint.easeOut",
    duration: 1,
    stagger: {
      each: 0.1,
    },
    delay: 0.75, // delay in seconds
  });
}
pageLoad();

// split text
$("[animation='split-stagger-text']").each(function (index) {
  let target = $(this).find(".is--scroll-intoview-scrub");
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: $(this),
      start: "top bottom-=100",
      end: "bottom center",
      scrub: true,
    },
  });

  tl.from(
    target,
    {
      y: "100%",
      ease: "Quint.easeOut",
      duration: 1,
      stagger: {
        each: 0.1,
        from: "start",
      },
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
    },
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
        from: "start",
      },
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
    },
  });

  tl.from(
    target,
    {
      y: "-10%",
    },
    0
  );
});
