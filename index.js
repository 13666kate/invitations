const button = document.querySelector(".image-button");

button.addEventListener("click", function (e) {
  e.preventDefault();

  const url = this.href;

  const tl = gsap.timeline();

  // кнопка исчезает
  tl.to(".image-button img", {
    scale: 0.85,
    opacity: 0,
    duration: 0.3,
    ease: "power2.inOut"
  })

  // ВОТ ГЛАВНОЕ — улёт всей страницы
  .to(".page", {
    y: "-100vh",
    opacity: 0,
    duration: 0.9,
    ease: "power3.inOut",
    onComplete: () => {
      window.location.href = url;
    }
  });
});