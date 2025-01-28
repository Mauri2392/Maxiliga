let navbar = document.querySelector('.header .navbar');
let menu  = document.querySelector('#menu');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}; 

window.onscroll = () => {
    menu.classList.remove("fa-times");
    navbar.classList.remove("active");
  };
  
  var swiper = new Swiper(".home-slider", {
    grabCursor: true,
    loop: true,
    centeredSlides: true,
    autoplay: {
      delay: 4500,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  }); 

let themeBtn = document.querySelector('#theme-btn');

themeBtn.onclick = () =>{
    themeBtn.classList.toggle('fa-sun');

    if(themeBtn.classList.contains('fa-sun')){
        document.body.classList.add('active');
    }else{
        document.body.classList.remove('active');
    }
};

  var swiper = new Swiper(".gallery-slider", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 20,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
  }); 

  var swiper = new Swiper(".review-slider", {
    autoplay: {
        delay:7500,
        disableOnInteraction: false,
    },
    grabCursor: true,
    loop: true,
    spaceBetween:20,
    centeredSlides:true,
    breakpoints: {
        0:{
            slidesPerView: 1,
        },
        768:{
            slidesPerView: 2,
        },
        991:{
            slidesPerView: 3,
        },
    },
});

let accordion = document.querySelectorAll('.accordion-containerfp .accordion');

accordion.forEach(acco =>{
    acco.onclick = () => {
        accordion.forEach(subacco => {
            subacco.classList.remove('active')
        });
        acco.classList.add('active');
    }
}) 

AOS.init({
  duration:800,
  delay:100
}); 



