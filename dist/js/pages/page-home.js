"use strict";
(function () {
	const burger = document.querySelector(".header-burger");
	const body = document.querySelector(".body");
	const mob_menu = document.querySelector(".header-second");
	
	burger.addEventListener("click", ()=> {
		mob_menu.classList.toggle("active");
		burger.classList.toggle("active");
		body.classList.toggle("lock");
		body.classList.toggle("substrate");
	})
})();