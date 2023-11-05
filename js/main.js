const toggler = document.querySelector(".nav__toggler");
const navbar = document.querySelector(".navbar");
toggler.addEventListener("click", (e) => {
  navbar.classList.toggle("expanded");
});
