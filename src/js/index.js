const navToggler = document.querySelector('[data-nav-toggle]');
const nav = document.querySelector('[data-nav]');

const hideNav = () => {
  navToggler.setAttribute('aria-expanded', "false");
  nav.setAttribute('data-visible', "false");
  document.body.style.overflowY = "initial";
}

const showNav = () => {
  navToggler.setAttribute('aria-expanded', "true");
  nav.setAttribute('data-visible', "true");
  document.body.style.overflowY = "hidden";
}

navToggler.addEventListener('click', () => {
  let isVisible = nav.getAttribute('data-visible') === "false";
  isVisible ? showNav() : hideNav();
})