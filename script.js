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