document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.getElementById("navbar");
  const openBtn = document.getElementById("open-navbar");
  const closeBtn = document.getElementById("close-navbar");

  openBtn.addEventListener("click", () => {
    navbar.classList.remove("hidden");
  });

  closeBtn.addEventListener("click", () => {
    navbar.classList.add("hidden");
  });

  window.addEventListener("scroll", () => {
    if (window.scrollY >= 600) {
      navbar.classList.add("fixed", "top-0", "left-0", "w-full", "z-50");
    } else {
      navbar.classList.remove("fixed", "top-0", "left-0", "w-full", "z-50");
    }
  });
});
