const navList = document.getElementsByClassName('nav__list')[0];
const navBurger = document.getElementsByClassName('nav__burger')[0];

document.onload = main();

function main() {
	navBurger.addEventListener('click', (e)=>{
		e.preventDefault();
		navList.classList.toggle('show');
		


		// if (navBurger.src === './images/icon-close.svg') {
		// 	navBurger.src = './images/icon-hamburger.svg';
		// } else {
		// 	navBurger.src = './images/icon-close.svg';
		// }
	})
} 