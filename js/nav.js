document.querySelectorAll("li:has(>.fa-phone)").forEach((element) => {
  element.addEventListener("click", () => (location.href = "phone.html"));
});

document.querySelectorAll("li:has(>.fa-envelope)").forEach((element) => {
  element.addEventListener("click", () => (location.href = "email.html"));
});

document.querySelectorAll("li:has(>.fa-user)").forEach((element) => {
  element.addEventListener("click", () => (location.href = "login.html"));
});
