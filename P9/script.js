const menuButton = document.querySelector("#menuButton");
const menu = document.querySelector("#menu");

menuButton.addEventListener("click", () => {
  const isHidden = menu.classList.toggle("hide");
  menuButton.setAttribute("aria-expanded", String(!isHidden));
});
