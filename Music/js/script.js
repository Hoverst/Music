"use srtict"

const swiper = new Swiper('.swiper', {
   direction: 'horizontal',
   loop: true,
   slidesPerView: 3,
   centeredSlides: true,
   navigation: {
     nextEl: '.collection-swiper__btn-next',
     prevEl: '.collection-swiper__btn-prev',
   },
 });

 const Newswiper = new Swiper('.products__swiper', {
   direction: 'horizontal',
   loop: true,
   slidesPerView: 1,
   spaceBetween: 66,
   centeredSlides: true,
      breakpoints:{
         320:{
            slidesPerView: 1,
         },
         391:{
            slidesPerView: 1.1,
         },
         400:{
            slidesPerView: 1.2,
         },
         443:{
            slidesPerView: 1.3,
         },
         486:{
            slidesPerView: 1.4,
         },
         510:{
            slidesPerView: 1.5,
         },
         540:{
            slidesPerView: 1.6,
         },
         600:{
            slidesPerView: 1.7,
         },
         640:{
            slidesPerView: 1.8,
         },
         680:{
            slidesPerView: 1.9,
         },
         720:{
            slidesPerView: 2,
         },
         760:{
            slidesPerView: 2,
         },
         790:{
            slidesPerView: 2.1,
         },
         830:{
            slidesPerView: 2.3,
         },
         886:{
            slidesPerView: 2.4,
         },
         930:{
            slidesPerView: 2.5,
         },
         983:{
            slidesPerView: 2.7,
         },
         1021:{
            slidesPerView: 2.8,
         },
         1109:{
            slidesPerView: 2.9,
         },
         1200:{
            slidesPerView: 3,
         },
      },
 });

 
 $(document).ready(function() {
   $('.menu__burger').click(function(event){
      $('.menu__burger,.burger__window').toggleClass('active');
      $('body').toggleClass('lock');
   });
 });