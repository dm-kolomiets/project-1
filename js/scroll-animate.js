//scroll image
"use strict";
const parallax = document.getElementById("parallax");
const content = parallax.querySelector(".content");
const img = parallax.querySelector("img");
const title = [...parallax.querySelectorAll(".title div")];
const getClip = () => {
  const rect = content.getBoundingClientRect();
  const value = parallax.getBoundingClientRect().left;
  return `polygon(${value}px 0px, ${rect.width - value}px 0px, ${
    rect.width - value
  }px ${rect.height - value}px, ${value}px ${rect.height - value}px)`;
};
const getDefault = () => {
  const rect = content.getBoundingClientRect();
  return `polygon(0px 0px, ${rect.width}px 0px, ${rect.width}px ${rect.height}px, 0px ${rect.height}px)`;
};
ScrollTrigger.create({
  animation: gsap
    .timeline()
    .fromTo(img, { y: "-15%", scale: 1.5 }, { y: "0", scale: 1 })
    .fromTo(
      content,
      {
        clipPath: () => {
          return getClip();
        },
      },
      {
        clipPath: () => {
          return getDefault();
        },
      },
      "-=90%"
    ),
  invalidateOnRefresh: true,
  trigger: parallax,
  start: "top bottom",
  end: `${100 * title.length}%`,
  scrub: true,
});

const timeline = gsap.timeline();
title.forEach((element, index) => {
  const titleTimeline = gsap
    .timeline()
    .fromTo(
      element,
      { opacity: 0, y: "100%" },
      { opacity: 1, y: "0%", ease: "linear" }
    )
    .to(element, { y: "-100%", ease: "linear" })
    .to(element, { opacity: 0, ease: "linear" }, "-=90%");
  timeline.add(titleTimeline, `${(index / title.length) * 100}%`);
});
ScrollTrigger.create({
  animation: timeline,
  trigger: parallax,
  start: "top top+=80",
  scrub: true,
  pin: true,
  end: `${100 * title.length}%`,
});
