console.log('slider running...');

new Swiper('.gallery__slider', {
  loop: false,
  spaceBetween: 10,
  pagination: {
    el: '.gallery__pagination',
    clickable: true,
  },
  navigation: {
    prevEl: '.slider__btn-prev',
    nextEl: '.slider__btn-next',
  },
  uniqueNavElements: false,
  breakpoints: {
    1920: {
      slidesPerView: 4,
    },
    1280: {
      slidesPerView: 4,
    },
    1230: {
      slidesPerView: 3,
    },
    740: {
      slidesPerView: 2,
      spaceBetween: 4,
    },
    560: {
      slidesPerView: 3,
      spaceBetween: 4,
    },
    375: {
      slidesPerView: 2,
      spaceBetween: 3,
    },
    320: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
  },
});
