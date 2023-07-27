const slider = new Swiper(".swiper", {
  direction: "horizontal",
  loop: true,
  autoplay: {
    delay: 5000,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  speed: 1000,
});

const gallerySlider = new Swiper("#home-gallery .swiper", {
  direction: "horizontal",
  slidesPerView: 4,

  spaceBetween: "11px",
  loop: true,
  autoplay: {
    delay: 2000,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  speed: 1000,
});

const clientSlider = new Swiper("#home-client .swiper", {
  direction: "horizontal",
  slidesPerView: 5,
  spaceBetween: "20px",
  loop: true,
  speed: 1000,
  autoplay: {
    delay: 2000,
  },
});
