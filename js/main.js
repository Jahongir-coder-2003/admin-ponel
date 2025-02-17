const sidebar = document.querySelector("nav");
const sidebarToggle = document.querySelector(".menu");

sidebarToggle.addEventListener("click", () => {
  sidebar.classList.toggle("close");
});

if (innerWidth <= 1000) {
  sidebar.classList.add("close");
} else {
  sidebar.classList.remove("close");
}

// dark-light

const body = document.body;
const modeToggle = document.querySelector(".nav-dark");

modeToggle.addEventListener("click", () => {
  body.classList.toggle("dark");
});
