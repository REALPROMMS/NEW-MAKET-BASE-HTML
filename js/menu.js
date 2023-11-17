const menuBtn = document.querySelector('.btn-menu');
const wrap = document.querySelector('.menu__list');
const closeBtn = document.querySelector('.btn-menu__close');


let toggleClass = function() {
	wrap.classList.toggle('menu__opened');
} 

menuBtn.addEventListener('click', toggleClass);
closeBtn.addEventListener('click', toggleClass);
