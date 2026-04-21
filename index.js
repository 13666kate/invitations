gsap.registerPlugin(ScrollTrigger);

// Находим все наши экраны
const sections = gsap.utils.toArray(".screen");

sections.forEach((section) => {
  gsap.to(section, {
    opacity: 1,
    scale: 1,
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
      trigger: section,
      start: "top 50%", // Анимация сработает, когда центр экрана пересечет середину окна
      toggleActions: "play none none reverse", // При скролле назад анимация повторится
      onEnter: () => section.classList.add("is-visible"),
    }
  });
});