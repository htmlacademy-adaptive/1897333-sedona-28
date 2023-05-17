//HEADER
////header button variables
let menuBtn = document.querySelector('.main-nav__toggle');
let menu = document.querySelector('.main-nav__wrapper');
let cross = document.querySelectorAll('.main-nav__toggle-line');
let logo = document.querySelector('.main-header__logo-link');
let headerr = document.querySelector('.main-nav');
////delete nojs class
menuBtn.classList.remove('main-nav__toggle--nojs');
menu.classList.remove('main-nav__wrapper--nojs');
logo.classList.remove('main-header__logo-link--nojs');
headerr.classList.remove('main-nav--nojs');
////show&hide mobile menu
menuBtn.addEventListener('click', function () {
  menuBtn.classList.toggle('main-nav__toggle--active');
  menu.classList.toggle('main-nav__wrapper--active');
  cross.forEach((element) => { element.classList.toggle('main-nav__toggle-line--active'); })
})

//FORM
let form = document.querySelector('.feedback');

if (form) {
////form variables
let submit = document.querySelector('.feedback_button');
let confirmButtonOk = document.querySelector('.modal__confirm--ok');
let confirmButtonError = document.querySelector('.modal__confirm--error');
let modalOk = document.querySelector('.modal--ok');
let modalError = document.querySelector('.modal--error');
let modalOkActive = document.querySelector('.modal--ok--active');
let modalErrorActive = document.querySelector('.modal--error--active');
////randomizer
function randomIntFromInterval(min, max) { // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min)
};

////show modal after sending form
submit.addEventListener('click', function () {
  let rndNum = randomIntFromInterval(1, 100);
  if (rndNum<51) {
    modalOk.classList.add('modal--ok--active');
    console.log('ok')
  } else {
    modalError.classList.add('modal--error--active');
    console.log('error')
  }
});
////hide modals
confirmButtonOk.addEventListener('click', function () {
  modalOk.classList.remove('modal--ok--active');
});

confirmButtonError.addEventListener('click', function () {
  modalError.classList.remove('modal--error--active');
});
}
