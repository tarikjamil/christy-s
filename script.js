// split start
let text;

// Split the text up
function runSplit() {
  text = new SplitType("[animation='split-stagger-text']", {
    types: "lines, words",
    lineClass: "split-line",
    wordClass: "is--scroll-intoview-scrub"
  });
}

runSplit();

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
    
    gsap.to('.home--parent', {
        opacity: 1,
        duration: 1,
        delay: 0.2,
        ease: "Quint.easeOut",
        onStart: function() {
            // Set the display property to block just before the animation starts
            document.querySelector('.home--parent').style.display = 'block';
        }
    });
    gsap.to('.section.is--loading', {
        opacity: 0,
        duration: 1,
        delay: 0.2,
        ease: "Quint.easeOut",
        onStart: function() {
            // Set the display property to block just before the animation starts
            document.querySelector('.section.is--loading').style.display = 'none';
        }
    });
    gsap.from("[animation='loadingclick']", {
        opacity: 0,
        y: "20rem",
        ease: "Quint.easeOut",
        duration: 1,
        stagger: {
            each: 0.1
          },
        delay: 0.2 // delay in seconds
    });
});

// split text
$("[animation='split-stagger-text']").each(function (index) {
    let target = $(this).find(".is--scroll-intoview-scrub");
  
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: $(this),
        start: "top center",
        end: "bottom center",
        ease: "Quint.easeOut",
        duration: 1,
        scrub: true
      }
    });
  
    tl.from(
      target,
      {
        y: "100%"
      },
      0
    );
  });

  $("[animation='fade']").each(function (index) {
    let target = $(this);
  
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: $(this),
        start: "top bottom-=200",
        ease: "Quint.easeOut",
        duration: 1,
      }
    });
  
    tl.from(
      target,
      {
        y: "20rem",
        opacity: 0
      },
      0
    );
  });

  $("[animation='fade-stagger']").each(function (index) {
    let target = $(this).find("[animation='fade-stagger-el']");
  
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: $(this),
        start: "top center",
        ease: "Quint.easeOut",
        duration: 1,
      }
    });
  
    tl.from(
      target,
      {
        y: "20rem",
        opacity: 0
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
  
  $(".menu--bg").on("click", function () {
    $(".menu--link").click();
  });