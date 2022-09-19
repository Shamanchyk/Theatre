var swiper = new Swiper(".mySwiper", {
    effect: "cards",
    grabCursor: true,
    navigation: {
        nextEl: ".btnnext",
        prevEl: ".btnprev",
      }
  });


let menuScroll = document.querySelector('.header-top_nav')
let numberScroll = document.querySelector('.header-top_number')

window.onscroll = () => {
    if(window.scrollY > 70){
        menuScroll.classList.add('menuScroll');
        numberScroll.style.display = 'none';
    } else if(window.scrollY < 70){
        menuScroll.classList.remove('menuScroll');
        numberScroll.style.display = 'block';
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
