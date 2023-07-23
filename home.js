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

$(".split-line").each(function (index) {
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
      scale: 1.1,
    },
    0
  );
});

$("[animation='bam-parent']").each(function (index) {
  let persona = $(this).find(".bam--persona");
  let bubble = $(this).find(".bam--text-wrapper");
  let crack = $(this).find(".home--bam-shape");

  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: $(this),
      start: "top bottom-=100",
      end: "bottom center",
      scrub: true,
    },
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

const movieItems = document.getElementsByClassName("home--movie-item");

// List of poster URLs
const posterURLs = [
  "https://uploads-ssl.webflow.com/64897164d5ba2aed4b37b463/649c2f656e9ad48f04abc935_CSTY-001_Credits_Film_TheRightStuff2.jpg",
  "https://uploads-ssl.webflow.com/64897164d5ba2aed4b37b463/649c2f65e477d081c95fa8bc_Christys_Credit_Dunkirk.jpg",
  "https://uploads-ssl.webflow.com/64897164d5ba2aed4b37b463/649c2f65561dd83f0e82205c_CSTY-001_Credits_Film_2001.jpg",
  "https://uploads-ssl.webflow.com/64897164d5ba2aed4b37b463/649c2f653e4af2479fdbb108_CSTY-001_Credits_Film_SlingBlade.jpg",
  "https://uploads-ssl.webflow.com/64897164d5ba2aed4b37b463/649c35dc178a1d1381579fc0_Christys_Credit_JimJeffriesShow.jpg",
  "https://uploads-ssl.webflow.com/64897164d5ba2aed4b37b463/649c35dcb678fdb6afe9da6e_CSTY-001_Credits_WafflesnMochi.jpg",
  "https://uploads-ssl.webflow.com/64897164d5ba2aed4b37b463/649c35dcfe99682305198360_CSTY-001_Credits_Avatar.jpg",
  "https://uploads-ssl.webflow.com/64897164d5ba2aed4b37b463/649c35dcfcc9c82581f405f7_CSTY-001_Credits_Film_DarkKnight.jpg",
  "https://uploads-ssl.webflow.com/64897164d5ba2aed4b37b463/649c3646178a1d1381582903_Poster_JoeVsCarole.jpeg",
  "https://uploads-ssl.webflow.com/64897164d5ba2aed4b37b463/649c36460692de20732b88b7_CSTY-001_Credits_TheFWord.jpg",
  "https://uploads-ssl.webflow.com/64897164d5ba2aed4b37b463/649c3646d6cdd13d3beb364d_CSTY-001_Credits_XTremeWeightLoss.jpg",
  "https://uploads-ssl.webflow.com/64897164d5ba2aed4b37b463/649c3646433fb54b2b776712_CSTY-001_UndercoverBoss.jpg",
];

// Track previously used image indexes
let prevIndexes = [];

// Attach event listeners for hover effect on movie items
Array.from(movieItems).forEach((item) => {
  item.addEventListener("mouseenter", function () {
    const poster = item.querySelector(".home--movie-poster");
    let randomIndex = getRandomIndex();

    // Ensure the image is not reused immediately
    while (prevIndexes.includes(randomIndex)) {
      randomIndex = getRandomIndex();
    }

    prevIndexes.push(randomIndex);
    if (prevIndexes.length > 2) {
      prevIndexes.shift();
    }

    const randomURL = posterURLs[randomIndex];
    poster.src = randomURL;
  });

  item.addEventListener("mouseleave", function () {
    const poster = item.querySelector(".home--movie-poster");
    poster.src = "default-poster.jpg";
  });
});

// Function to get random image index
function getRandomIndex() {
  return Math.floor(Math.random() * posterURLs.length);
}

// slider success stories
document.addEventListener("DOMContentLoaded", function () {
  let splide = new Splide(".slider1", {
    type: "fade",
    perPage: 1,
    perMove: 1,
    gap: "24rem",
    arrows: false,
    pagination: false,
    breakpoints: {
      991: {
        // Tablet
        gap: "24rem",
        drag: true,
      },
    },
  });

  const sliderProgress = document.querySelector(".slider-progress");

  splide.on("moved", function (newIndex) {
    const totalSlides = splide.length;
    const currentSlide = newIndex + 1;
    sliderProgress.textContent = `${currentSlide}/${totalSlides}`;
  });

  splide.mount();
});
