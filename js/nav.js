document.querySelectorAll("li:has(>.fa-phone)").forEach((element) => {
  element.addEventListener("click", () => (location.href = "phone.html"));
});

document.querySelectorAll("li:has(>.fa-envelope)").forEach((element) => {
  element.addEventListener("click", () => (location.href = "email.html"));
});

const modal = document.getElementsByClassName("modal")[0];

document.querySelectorAll("li:has(>.fa-user)").forEach((element) => {
  element.addEventListener("click", () => {
    popupContainer.style.display = "block";
  });
});

document.querySelectorAll("#Home").forEach((element) => {
  element.addEventListener("click", () => (location.href = "index.html"));
});

document.querySelectorAll("#Shop").forEach((element) => {
  element.addEventListener("click", () => (location.href = "shop.html"));
});

document.querySelectorAll("#About").forEach((element) => {
  element.addEventListener("click", () => (location.href = "about.html"));
});

document.querySelector("#scrollTOP").addEventListener("click", () => {
  window.scrollTo(0, 0);
});

const element = document.getElementById("scrollTOP");

window.addEventListener("scroll", function () {
  if (window.pageYOffset > 0) {
    element.classList.add("scrolled");
    element.classList.remove("unscrolled");
  } else {
    element.classList.remove("scrolled");
    element.classList.add("unscrolled");
  }
});

const closePopupButton = document.getElementById("closePopup");
const popupContainer = document.getElementById("popupContainer");

closePopupButton.addEventListener("click", () => {
  popupContainer.style.display = "none";
});
