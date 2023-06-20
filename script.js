  // split start
  let text;
  let texthero;
  
  // Split the text up
  function runSplit() {
    text = new SplitType("[animation='split-stagger-text']", {
      types: "lines, words",
      lineClass: "split-line",
      wordClass: "is--scroll-intoview-scrub"
    });
    texthero = new SplitType("[animation='split-stagger-hero']", {
      types: "lines, words",
      lineClass: "split-line",
      wordClass: "is--scroll-hero-scrub"
    });
  }
  
  runSplit();
  
  // split type ends
  
  gsap.registerPlugin(ScrollTrigger);

  // page load starts
  gsap.to(".main-wrapper", {
    opacity: 1,
    ease: "Quint.easeOut",
    duration: 1
  });
  gsap.from(".logo--loading", {
    opacity: 0,
    ease: "Quint.easeOut",
    duration: 1
  });


// page finish loading
  window.addEventListener("load", function() {
    gsap.to(".loading-parent", {
        opacity: 0,
        ease: "Quint.easeOut",
        duration: 0.5
      });
    gsap.to(".loading--parent-second", {
        opacity: 1,
        ease: "Quint.easeOut",
        duration: 0.5
      });
    gsap.from("[animation='loading']", {
        opacity: 0,
        y:"20rem",
        ease: "Quint.easeOut",
        duration: 0.5
      });

});
  
  $("[animation='split-stagger']").each(function (index) {
    let target = $(this).find("[animation='split-stagger-el']");
  
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: $(this),
        start: "top bottom -=100"
      }
    });
  
    tl.from(
      target,
      {
        y: "100%",
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
  
  $("[animation='split-stagger-20']").each(function (index) {
    let target = $(this).find("[animation='split-stagger-el']");
  
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: $(this),
        start: "top bottom -=100"
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
  
  $("[animation='fade-in']").each(function (index) {
    let target = $(this);
  
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: $(this),
        start: "top bottom -=200"
      }
    });
  
    tl.from(
      target,
      {
        y: "20rem",
        opacity: 0,
        ease: "Quint.easeOut",
        duration: 1
      },
      0
    );
  });
  
  $("[animation='hero--trigger']").each(function (index) {
    let target = $("[animation='parallax-hero']");
  
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: $(this),
        start: "top top",
        end: "bottom top",
        ease: "Quint.easeOut",
        duration: 1,
        scrub: true
      }
    });
  
    tl.from(
      target,
      {
        y: "-15%"
      },
      0
    );
  });
  
  $("[animation='parallax']").each(function (index) {
    let target = $(this);
  
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: $(this),
        start: "top bottom",
        end: "bottom top",
        ease: "Quint.easeOut",
        duration: 1,
        scrub: true
      }
    });
  
    tl.from(
      target,
      {
        y: "-20%"
      },
      0
    );
  });
  
  $("[animation='parallax-2']").each(function (index) {
    let target = $(this);
  
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: $("[animation='parallax--wrapper']"),
        start: "top bottom",
        end: "bottom top",
        ease: "Quint.easeOut",
        duration: 1,
        scrub: true
      }
    });
  
    tl.from(
      target,
      {
        y: "40%"
      },
      0
    );
  });
  
  // navbar menu hamburger click
  $(".navbar--menu-trigger").click(function () {
    var clicks = $(this).data("clicks");
    if (clicks) {
      // odd clicks
      gsap.to(".navlink-parent", {
        y: "100%",
        duration: 1,
        opacity: 0,
        ease: "Quint.easeOut"
      });
    } else {
      // even clicks
      gsap.fromTo(
        ".navlink-parent",
        {
          y: "100%",
          opacity: 0
        },
        {
          duration: 1,
          delay: 0.5,
          y: "0%",
          opacity: 1,
          ease: "Quint.easeOut",
          stagger: {
            each: 0.1
          }
        }
      );
    }
    $(this).data("clicks", !clicks);
  });
  
  $(".menu-open-bg").on("click", function () {
    $(".navbar--menu-trigger").click();
  });