const swiper = new Swiper('.swiper-cero', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    effect: "slider",
    spaceBetween: 5,
    autoplay: {delay:15000, pauseOnMouseEnter: true, disableOnInteraction: false,},

    breakpoints: {
      // when window width is >= 1200px
      1200: {
        slidesPerView: 3,
        spaceBetween: 15
      },

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    //scrollbar: {
    //  el: '.swiper-scrollbar',
    //},
    }
  });

