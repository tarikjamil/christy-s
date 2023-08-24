gsap.registerPlugin(ScrollTrigger);

// page load starts
gsap.to(".main-wrapper", {
  opacity: 1,
  ease: "Quint.easeOut",
  duration: 0.5,
});
gsap.to(".loading--logo-wrapper", {
  scale: 0.4,
  ease: "linear",
  duration: 40,
});

// page finish loading
window.addEventListener("load", function () {
  gsap.from(".loading--top", {
    opacity: 0,
    ease: "Quint.easeOut",
    duration: 0,
    delay: 4, // delay in seconds
  });
  gsap.to(".loading-parent", {
    y: "-100vh",
    ease: "Quint.easeOut",
    duration: 1,
    delay: 6, // delay in seconds
  });
  gsap.to(".loading--parent-second", {
    opacity: 1,
    ease: "Quint.easeOut",
    duration: 1,
    delay: 6, // delay in seconds
  });
  gsap.from("[animation='loading']", {
    opacity: 0,
    y: "20rem",
    ease: "Quint.easeOut",
    duration: 1,
    stagger: {
      each: 0.1,
    },
    delay: 6, // delay in seconds
  });
  gsap.from("[animation='loading-navbar']", {
    opacity: 0,
    y: "-20rem",
    ease: "Quint.easeOut",
    duration: 1,
    stagger: {
      each: 0.1,
    },
    delay: 4, // delay in seconds
  });
});
