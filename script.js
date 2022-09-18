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

const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');

if(hamburger){
    hamburger.addEventListener("click", function() {
        document.body.classList.toggle('lock');
        hamburger.classList.toggle('active');
        menu.classList.toggle('active');
    })
}
