document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.getElementById("menu-btn"); // hamburger
  const mobileMenu = document.getElementById("mobile-menu"); // backdrop + sheet
  const closeBtn = document.getElementById("close-navbar"); // mobile close button
  const navItems = document.querySelectorAll(".nav-list-item");
  const switchBtns = document.querySelectorAll(".success-switch");
  const switchContainer = switchBtns[0].parentElement; // parent wrapper
  const successImg = document.getElementById("success-img");
  const successText = document.getElementById("success-text");
  const failedImg = document.getElementById("failed-img");
  const failedText = document.getElementById("failed-text");

  let activeIndex = 0; // default to first button
  let startX = 0;

  // Open mobile menu
  menuBtn.addEventListener("click", () => {
    mobileMenu.classList.remove("hidden");
  });

  // Close mobile menu
  closeBtn.addEventListener("click", () => {
    mobileMenu.classList.add("hidden");
  });

  // Close when clicking backdrop
  mobileMenu.addEventListener("click", (e) => {
    if (e.target === mobileMenu) {
      mobileMenu.classList.add("hidden");
    }
  });

  // Nav item active state
  navItems.forEach((item) => {
    item.addEventListener("click", () => {
      navItems.forEach((el) => el.classList.remove("nav-link-active"));
      item.classList.add("nav-link-active");
    });
  });

  // 🔑 Centralized toggle function
  function activateSwitch(index) {
    activeIndex = index;

    switchBtns.forEach((el, i) => {
      el.classList.toggle("active-state", i === index);
    });

    if (index === 0) {
      // With SpendIn
      successImg.classList.replace("opacity-0", "opacity-100");
      successText.classList.replace("opacity-0", "opacity-100");
      failedImg.classList.replace("opacity-100", "opacity-0");
      failedText.classList.replace("opacity-100", "opacity-0");
    } else {
      // Without SpendIn
      failedImg.classList.replace("opacity-0", "opacity-100");
      failedText.classList.replace("opacity-0", "opacity-100");
      successImg.classList.replace("opacity-100", "opacity-0");
      successText.classList.replace("opacity-100", "opacity-0");
    }
  }

  // Click support
  switchBtns.forEach((btn, index) => {
    btn.addEventListener("click", () => activateSwitch(index));
  });

  // Touch/drag support
  switchContainer.addEventListener("touchstart", (e) => {
    startX = e.touches[0].clientX;
  });

  switchContainer.addEventListener("touchend", (e) => {
    let delta = e.changedTouches[0].clientX - startX;
    if (Math.abs(delta) > 50) {
      activateSwitch(delta > 0 ? 0 : 1);
    }
  });

  // Mouse drag support (desktop)
  switchContainer.addEventListener("mousedown", (e) => {
    startX = e.clientX;
  });

  switchContainer.addEventListener("mouseup", (e) => {
    let delta = e.clientX - startX;
    if (Math.abs(delta) > 50) {
      activateSwitch(delta > 0 ? 0 : 1);
    }
  });

  // Sticky navbar on scroll (optional)
  // window.addEventListener("scroll", () => {
  //   if (window.scrollY >= 600) {
  //     navbar.classList.add("fixed", "top-0", "left-0", "w-full", "z-50");
  //   } else {
  //     navbar.classList.remove("fixed", "top-0", "left-0", "w-full", "z-50");
  //   }
  // });
});
