const burger = document.getElementById("burger");
const nav = document.getElementById("nav");
const dropdown = document.getElementsByClassName("dropdown")[0];
window.onload = main();

function main () {
	showBurgerMenu();
}

function showBurgerMenu () {
	burger.addEventListener('click', (e)=>{
		e.preventDefault();
		nav.classList.toggle("nav-bg");
		dropdown.classList.toggle("show-dropdown");
	})
}
