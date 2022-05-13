let menu = document.querySelector("#menu");
let navbar = document.querySelector(".navbar");

menu.addEventListener("click", function () {
  this.classList.toggle("fa-times");
  navbar.classList.toggle("toggle");
});

window.onscroll = function () {
  navbar.classList.remove("toggle");
  menu.classList.remove("fa-times");
};

var swiper = new Swiper(".image-slider", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 2,
    slideShadows: true,
  },
  loop: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
});
