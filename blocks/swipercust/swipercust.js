import Swiper from './swiper-bundle.min.js';

export default function decorate(block) {
  const rows = Array.from(block.children);
  // const swipercls =document.createElement('div')
  block.classList.add('swiper');
  const swiperWrapper = document.createElement('div');
  swiperWrapper.classList.add('swiper-wrapper');

  rows.forEach((row) => {
    row.classList.add('swiper-slide');
    swiperWrapper.append(row);
  });
  block.append(swiperWrapper);
  const nextBtn = document.createElement('div');
  nextBtn.classList.add('swiper-button-next');
  const prevBtn = document.createElement('div');
  prevBtn.classList.add('swiper-button-prev');
  block.append(nextBtn, prevBtn);

  Swiper(block, {
    slidesPerView: 3,
    spaceBetween: 30,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      320: { slidesPerView: 1, spaceBetween: 15 },
      600: { slidesPerView: 2, spaceBetween: 15 },
      900: { slidesPerView: 3, spaceBetween: 30 },
      1200: { slidesPerView: 3, spaceBetween: 30 }
    }
  });
}

// function swiperInit(block) {
//   const swiperConfig = {
//     navigation: {
//       nextEl: ".swiper-button-next",
//       prevEl: ".swiper-button-prev",
//     },
//   };
// new Swiper(block, swiperConfig);
// }
