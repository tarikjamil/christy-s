$(".menu--bg").on("click", function () {
  $(".menu--link").click();
});

const lenis = new Lenis();

lenis.on("scroll", (e) => {});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

$(".shape--wrapper").each(function (index) {
  let target = $(this).find(".shape--img");

  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: $(this),
      start: "bottom bottom",
      end: "bottom bottom -=100",
      scrub: true,
      markers: false,
    },
  });

  tl.from(
    target,
    {
      y: "10%",
      opacity: 0,
    },
    0
  );
});
