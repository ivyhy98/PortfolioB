
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
  prev.classList.add("current");
  current.classList.add('next');
  next.classList.add('previous');
  current.classList.remove('current');
  prev.classList.remove('previous');
  next.classList.remove('next');
}

function handleNext(){
  const current = document.querySelector(".current");
  const prev = document.querySelector(".previous");
  const next = document.querySelector(".next");
  next.classList.add("current");
  current.classList.add("previous");
  prev.classList.add("next");
  current.classList.remove("current");
  prev.classList.remove("previous");
  next.classList.remove("next");

}

//==== Work Div Click funtion ====
const workDiv = document.querySelectorAll('.work-div');
const close = document.querySelectorAll('#close-modal');

function hideModal(i){
   const modal = document.getElementById(`project-${i}`);
   modal.classList.add("hide");
   console.log(close[i]);
}
function showModal(i){
  const modal = document.getElementById(`project-${i}`);
  modal.classList.remove("hide");
}

for(let i = 0; i < workDiv.length; i++){
  //Open modal when img is clicked
  workDiv[i].addEventListener("click", (evt) => {
    const modal = document.getElementById(`project-${i}`);
    modal.classList.remove("hide");
  });
  //Close modal when x is clicked or
  close[i].addEventListener("click", (evt) => {
    const modal = document.getElementById(`project-${i}`);
    modal.classList.add("hide");
    console.log(close[i]);
  });

}









