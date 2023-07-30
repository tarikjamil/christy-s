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

function animateElements(selector, duration) {
  const timeline = gsap.timeline({ repeat: -1 });

  const animateImages = (light, fromImage, toImage) => {
    timeline
      .to(light, { opacity: 0, duration: 0.5 })
      .to(light, { opacity: 1, duration: 0.5 })
      .to(fromImage, { opacity: 0, duration: 0.5, delay: -0.5 }, "<")
      .fromTo(
        toImage,
        { opacity: 0 },
        { opacity: 1, duration: 0.5, delay: -0.5 }
      )
      .to({}, { duration: duration }); // Add a pause of duration seconds before next transition
  };

  document.querySelectorAll(selector).forEach((item) => {
    const light = item.querySelector(".home--movie--light");
    const image1 = item.querySelector(".image-1");
    const image2 = item.querySelector(".image-2");
    const image3 = item.querySelector(".image-3");
    const image4 = item.querySelector(".image-4");

    animateImages(light, image1, image2);
    animateImages(light, image2, image3);
    animateImages(light, image3, image4);
    animateImages(light, image4, image1);
  });
}

animateElements(".home--movie-item-1", 4);
animateElements(".home--movie-item-2", 5);
animateElements(".home--movie-item-3", 6);
