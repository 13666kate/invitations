window.addEventListener("load", () => {
  gsap.from("body", {
    opacity: 0,
    scale: 1.05,
    duration: 0.8,
    ease: "power2.out"
  });
});