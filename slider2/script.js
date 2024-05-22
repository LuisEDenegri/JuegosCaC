const swiper = new Swiper('.swiper-cero', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    effect: "slider",
    
    spaceBetween: 5,
    //autoplay: {delay:10000, pauseOnMouseEnter: true, disableOnInteraction: false,},
    

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
  });

