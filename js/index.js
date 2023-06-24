let swiper7 = new Swiper('.mySwiperThree', {
  loop:true,
  autoplay:true,
  effect:'coverflow',
  grabCursor:true,
  centeredSlides:true,
  slidesPerView:'auto',
  coverflowEffect:{
    rotate:0,
    stretch:0,
    depth:100,
    modifier:2,
    slideShadows:true,
  },
  pagination:{
    el:'.swiper-pagination'
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
swiper7.navigation.update();