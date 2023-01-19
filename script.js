
//====Navbar on scroll====
const navbar = document.querySelector("#navbar");
let lastScrollTop;
window.addEventListener("scroll", function () {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  if (scrollTop > lastScrollTop) {
    navbar.style.top = "-80px";
  } else {
    navbar.style.top = "0";
  }
  lastScrollTop = scrollTop;
});

//==== Drop Down Menu ====
const dropDown = document.querySelector('.dropdown-menu');
function dropDownFunction(){

}
