import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

const swiper = new Swiper('.strip-slider', {
  modules: [Navigation, Pagination],
  direction:"horizontal",
  loop: false,
  slidesPerView: 'auto', // Allows your card--vertical 300px width to dictate sizing
  spaceBetween: 32,
  
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

export default swiper