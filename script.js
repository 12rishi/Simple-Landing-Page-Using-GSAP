function page1Animation() {
  var tl = gsap.timeline();
  tl.from("nav h1,nav ul li,nav button", {
    y: -40,
    opacity: 0,
    duration: 0.5,
    delay: 0.2,
    stagger: 0.2,
  });
  tl.from(
    ".hero__content h1",
    {
      x: -300,
      opacity: 0,
      duration: 0.6,
    },
    "-=0.3"
  );
  tl.from(".hero__content p", {
    x: -100,
    opacity: 0,
    duration: 0.4,
  });
  tl.from(".hero__content button", {
    opacity: 0,
    duration: 0.3,
  });
  tl.from(
    ".hero__image img",
    {
      opacity: 0,
      duration: 0.4,
    },
    "-=0.2"
  );
  tl.from(
    ".partner-logos img",
    {
      opacity: 0,
      y: 30,
      duration: 0.3,
      stagger: 0.3,
    },
    "-=1"
  );
}
function page2Animation() {
  var tl2 = gsap.timeline({
    scrollTrigger: {
      trigger: ".services",
      scroller: "body",
      scrub: 2,

      start: "top 60%",
      end: "top -8%",
    },
  });
  tl2.from(".services__intro", {
    opacity: 0,
    x: -40,
    duration: 0.4,
  });
  tl2.from(
    ".service.line1.left",
    {
      x: -100,
      opacity: 0,
      duration: 0.4,
    },
    "anim"
  );
  tl2.from(
    ".service.line1.right",
    {
      x: 100,
      opacity: 0,
      duration: 0.4,
    },
    "anim"
  );

  tl2.from(
    ".service.line2.left",
    {
      x: -100,
      opacity: 0,
      duration: 0.4,
    },
    "anim2"
  );
  tl2.from(
    ".service.line2.right",
    {
      x: 100,
      duration: 0.4,
      opacity: 0,
    },
    "anim2"
  );
}
page1Animation();
page2Animation();
