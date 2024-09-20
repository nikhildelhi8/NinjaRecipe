const burger = document.querySelector("#burger");
const menu = document.querySelector("#menu");

burger.addEventListener("click", () => {
  if (menu.classList.contains("hidden")) {
    // Show the menu with transition
    menu.classList.remove("hidden"); // Make it visible
    // Use requestAnimationFrame to ensure the browser applies the removal before adding transition classes
    requestAnimationFrame(() => {
      menu.classList.remove("opacity-0", "scale-95");
      menu.classList.add("opacity-100", "scale-100");
    });
  } else {
    // Hide the menu with transition
    menu.classList.remove("opacity-100", "scale-100");
    menu.classList.add("opacity-0", "scale-95");
    // After the transition duration, add 'hidden'
    setTimeout(() => {
      menu.classList.add("hidden");
    }, 500); // Match the duration of the transition
  }
});
