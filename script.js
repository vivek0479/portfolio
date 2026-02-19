const hero = document.querySelector(".hero-content");

window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;
  hero.style.transform = `translateY(${scrollY * 0.2}px)`;
  hero.style.opacity = 1 - scrollY / 600;
});
const words = [
  "VIVEKANANDA",
  "DEVELOPER",
  "CREATOR",
  "ECE ENGINEER"
];

let index = 0;
const textElement = document.getElementById("changing-text");

setInterval(() => {
  index = (index + 1) % words.length;
  textElement.textContent = words[index];
}, 2500);
const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      }
    });
  },
  { threshold: 0.2 }
);

reveals.forEach(el => observer.observe(el));
const hamburger = document.getElementById("hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navLinks.classList.toggle("active");
});

/* Close menu when link clicked */
document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navLinks.classList.remove("active");
  });
});

