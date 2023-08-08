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
    duration: 1.2,
    stagger: {
      each: 0.15,
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

$("[animation='fadein']").each(function (index) {
  let target = $(this);
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

function typewriterEffect(elementId, content) {
  let output = document.getElementById(elementId);
  let chars = content.split("");
  output.innerHTML = "";

  let timeline = gsap.timeline({
    scrollTrigger: {
      trigger: output,
      start: "top center",
      end: "bottom center",
      scrub: 1,
      markers: true,
    },
  });

  chars.forEach((char, index) => {
    let span = document.createElement("span");
    span.textContent = char;
    span.style.opacity = "0";
    output.appendChild(span);

    timeline.to(
      span,
      {
        opacity: 1,
        ease: "power1.inOut",
        duration: 0.1,
      },
      `+=0.1`
    );
  });
}

typewriterEffect(
  "output",
  "This is a scrubbable typewriter effect using GSAP!"
);
