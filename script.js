
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

//==== About Section Carousel ====

function handlePrev(){
  const current = document.querySelector('.current');
  const prev = document.querySelector('.previous');
  const next = document.querySelector('.next');
  current.classList.add('next');
  prev.classList.add('current');
  next.classList.add('previous');
  current.classList.remove('current');
  prev.classList.remove('previous');
  next.classList.remove('next');
  console.log('previous');
}

function handleNext(){
  const current = document.querySelector(".current");
  const prev = document.querySelector(".previous");
  const next = document.querySelector(".next");
  current.classList.add("previous");
  prev.classList.add("next");
  next.classList.add("current");
  current.classList.remove("current");
  prev.classList.remove("previous");
  next.classList.remove("next");
  console.log("next");

}







