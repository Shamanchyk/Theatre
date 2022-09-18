var swiper = new Swiper(".mySwiper", {
    effect: "cards",
    grabCursor: true,
    navigation: {
        nextEl: ".btnnext",
        prevEl: ".btnprev",
      }
  });


let menuScroll = document.querySelector('.menu')

window.onscroll = () => {
    if(window.scrollY > 50){
        menuScroll.classList.add('menuScroll');
    } else if(window.scrollY < 50){
        menuScroll.classList.remove('menuScroll');
    }
};
