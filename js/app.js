import * as vovaFunctions from "./modules/functions.js";

vovaFunctions.isWebp();

const swiper = new Swiper('.place__slider', {
	slidesPerView: 5,
	// arrows 
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	spaceBetween: 70,
	lazy: true,
	breakpoints: {
		320: {
			spaceBetween: 10,
			slidesPerView: 2,
		},
		767: {
			spaceBetween: 0,
			slidesPerView: 2,
		},
		768: {
			spaceBetween: 35,
			slidesPerView: 3,
		},
		1024: {
			spaceBetween: 35,
			slidesPerView: 4,
		},
		1440: {
			spaceBetween: 70,
			slidesPerView: 5,
		},
	}
});


window.onscroll = function () { myFunction() };

var navbar = document.getElementById("header__nav");

var sticky = navbar.offsetTop;

function myFunction() {
	if (window.pageYOffset >= sticky) {
		navbar.classList.add("sticky")
	} else {
		navbar.classList.remove("sticky");
	}
	if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
		document.getElementById("header__nav").style.padding = "20px 40px";
	} else {
		document.getElementById("header__nav").style.padding = "40px 40px";
	}
}

const burger = document?.querySelector('.header__burger_btn');
const birger_line1 = document?.querySelector('.line-top')
const birger_line2 = document?.querySelector('.line-center')
const birger_line3 = document?.querySelector('.line-bot')
const nav = document?.querySelector('.header__navigation');
const novItems = nav?.querySelectorAll('a');



burger?.addEventListener('click', () => {
	birger_line1.classList.toggle('burger__active1')
	birger_line2.classList.toggle('burger__active2')
	birger_line3.classList.toggle('burger__active3')
	nav.classList.toggle('nav__visible')
});

novItems.forEach(el => {
	el.addEventListener('click', () => {
		birger_line1.classList.remove('burger__active1')
		birger_line2.classList.remove('burger__active2')
		birger_line3.classList.remove('burger__active3')
		nav.classList.remove('nav__visible')
	});
});

AOS.init();

// You can also pass an optional settings object
// below listed default settings
AOS.init({
	// Global settings:
	disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
	startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
	initClassName: 'aos-init', // class applied after initialization
	animatedClassName: 'aos-animate', // class applied on animation
	useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
	disableMutationObserver: false, // disables automatic mutations' detections (advanced)
	debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
	throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)


	// Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
	offset: 120, // offset (in px) from the original trigger point
	delay: 0, // values from 0 to 3000, with step 50ms
	duration: 400, // values from 0 to 3000, with step 50ms
	easing: 'ease', // default easing for AOS animations
	once: false, // whether animation should happen only once - while scrolling down
	mirror: false, // whether elements should animate out while scrolling past them
	anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});