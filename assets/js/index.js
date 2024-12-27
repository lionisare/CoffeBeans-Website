const navbarMenu = document.getElementById("navbar-menu"),
  btnMenu = document.getElementById("btn-menu"),
  btnClose = document.getElementById("btn-close");

// show menu
btnMenu.addEventListener("click", () => {
  navbarMenu.classList.add("open-menu");
});
btnClose.addEventListener("click", () => {
  navbarMenu.classList.remove("open-menu");
});

//remove navbar menu
const navbarItem = document.querySelectorAll(".navbar--item");

const linkAction = () => {
  const navbarMenu = document.getElementById("navbar-menu");
  navbarMenu.classList.remove("open-menu");
};
navbarItem.forEach((n) => n.addEventListener("click", linkAction));

//background header
const stikyHeader = () => {
  const header = document.getElementById("header");
  this.scrollY >= 50
    ? header.classList.add("stiky-header")
    : header.classList.remove("stiky-header");
};
window.addEventListener("scroll", stikyHeader);

// show login
const login = document.getElementById("login"),
  btnLogin = document.getElementById("btn-login"),
  btnLoginCls = document.getElementById("btn__login-close");

btnLogin.addEventListener("click", () => {
  login.classList.add("show-login");
});
btnLoginCls.addEventListener("click", () => {
  login.classList.remove("show-login");
});

/*=============== scroll animation===============*/
const SR = ScrollReveal({
  origin: "top",
  distance: "80px",
  duration: 2500,
  delay: 300,
  // reset: true,
});
SR.reveal(
  `.home--data, .section--title, 
  .section--description, 
  .services--content, .product--content, 
  .subscribe--content, 
  .footer, 
  .copyright--text`
);
SR.reveal(`.home--data`, { delay: 500 });
SR.reveal(`.services--card,`, { delay: 500, interval: 100 });
SR.reveal(`.product--card,`, { interval: 100 });
