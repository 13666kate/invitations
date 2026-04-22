let current = 0;
const sections = document.querySelectorAll(".screen");
let isScrolling = false;

function scrollToSection(index) {
  if (index < 0 || index >= sections.length) return;

  isScrolling = true;

  sections[index].scrollIntoView({
    behavior: "smooth"
  });

  // активная секция
  sections.forEach(s => s.classList.remove("active"));
  sections[index].classList.add("active");

  current = index;

  setTimeout(() => {
    isScrolling = false;
  }, 800);
}

window.addEventListener("wheel", (e) => {
  if (isScrolling) return;

  if (e.deltaY > 0) {
    scrollToSection(current + 1);
  } else {
    scrollToSection(current - 1);
  }
});

let startY = 0;

window.addEventListener("touchstart", (e) => {
  startY = e.touches[0].clientY;
});

window.addEventListener("touchend", (e) => {
  let endY = e.changedTouches[0].clientY;
  let diff = startY - endY;

  if (Math.abs(diff) < 50) return;

  if (diff > 0) {
    scrollToSection(current + 1);
  } else {
    scrollToSection(current - 1);
  }
});