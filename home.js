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

const movieItems1 = document.getElementsByClassName("home--movie-item-1");

// List of poster URLs
const posterURLs1 = [
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
const prevIndexes1 = [];

// Attach event listeners for hover effect on movie items
Array.from(movieItems1).forEach((item) => {
  item.addEventListener("mouseenter", function () {
    const poster1 = item.querySelector(".home--movie-poster-1");
    const randomIndex1 = getRandomIndex1();

    // Ensure the image is not reused immediately
    while (prevIndexes1.includes(randomIndex1)) {
      randomIndex1 = getRandomIndex1();
    }

    prevIndexes1.push(randomIndex1);
    if (prevIndexes1.length > 2) {
      prevIndexes1.shift();
    }

    const randomURL1 = posterURLs1[randomIndex1];
    poster1.src = randomURL1;
  });

  item.addEventListener("mouseleave", function () {
    const poster1 = item.querySelector(".home--movie-item-1");
    poster1.src = "default-poster.jpg";
  });
});

// Function to get random image index
function getRandomIndex1() {
  return Math.floor(Math.random() * posterURLs1.length);
}

// second
const movieItems2 = document.getElementsByClassName("home--movie-item-2");

// List of poster URLs
const posterURLs2 = [
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
const prevIndexes2 = [];

// Attach event listeners for hover effect on movie items
Array.from(movieItems2).forEach((item) => {
  item.addEventListener("mouseenter", function () {
    const poster2 = item.querySelector(".home--movie-poster-2");
    const randomIndex2 = getRandomIndex2();

    // Ensure the image is not reused immediately
    while (prevIndexes2.includes(randomIndex)) {
      randomIndex2 = getRandomIndex2();
    }

    prevIndexes2.push(randomIndex2);
    if (prevIndexes2.length > 2) {
      prevIndexes2.shift();
    }

    const randomURL2 = posterURLs2[randomIndex2];
    poster2.src = randomURL2;
  });

  item.addEventListener("mouseleave", function () {
    const poster2 = item.querySelector(".home--movie-item-2");
    poster2.src = "default-poster.jpg";
  });
});

// Function to get random image index
function getRandomIndex2() {
  return Math.floor(Math.random() * posterURLs2.length);
}

// third
const movieItems3 = document.getElementsByClassName("home--movie-item-3");

// List of poster URLs
const posterURLs3 = [
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
const prevIndexes3 = [];

// Attach event listeners for hover effect on movie items
Array.from(movieItems3).forEach((item) => {
  item.addEventListener("mouseenter", function () {
    const poster3 = item.querySelector(".home--movie-poster-3");
    const randomIndex3 = getRandomIndex3();

    // Ensure the image is not reused immediately
    while (prevIndexes3.includes(randomIndex3)) {
      randomIndex3 = getRandomIndex3();
    }

    prevIndexes.push(randomIndex);
    if (prevIndexes3.length > 2) {
      prevIndexes3.shift();
    }

    const randomURL3 = posterURLs3[randomIndex3];
    poster3.src = randomURL3;
  });

  item.addEventListener("mouseleave", function () {
    const poster3 = item.querySelector(".home--movie-item-3");
    poster3.src = "default-poster.jpg";
  });
});

// Function to get random image index
function getRandomIndex3() {
  return Math.floor(Math.random() * posterURLs3.length);
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

  let sliderProgress = document.querySelector(".slider-progress");
  let progressBar = document.querySelector(".progress-bar");
  let currentSlideSpan = document.querySelector(".current-slide");
  let totalSlidesSpan = document.querySelector(".total-slides");

  function formatSlideNumber(num) {
    return num.toString().padStart(2, "0");
  }

  splide.on("moved", function (newIndex) {
    let totalSlides = splide.length;
    let currentSlide = newIndex + 1;
    let progressPercentage = (currentSlide / totalSlides) * 100;

    progressBar.style.width = `${progressPercentage}%`;
    currentSlideSpan.textContent = formatSlideNumber(currentSlide);
    totalSlidesSpan.textContent = formatSlideNumber(totalSlides);
  });

  splide.mount();
});
