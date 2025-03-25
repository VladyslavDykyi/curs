"use strict";
(() => {
	const burger = document.querySelector(".header-burger");
	const body = document.querySelector("body");
	const mob_menu = document.querySelector(".header-second");
	const headerFirst = document.querySelector(".header-first");
	
	const header_dropdown_wrapper = document.querySelector(".header-dropdown-wrapper");
	const header_dropdown = header_dropdown_wrapper.querySelector(".header-dropdown");
	const drop_down = header_dropdown_wrapper.querySelector(".drop-down");
	
	
	burger.addEventListener("click", (e) => {
		e.stopPropagation();
		mob_menu.classList.toggle("active");
		burger.classList.toggle("active");
		body.classList.toggle("lock");
		body.classList.toggle("substrate");
	});
	
	headerFirst.addEventListener("click", (e) => {
		e.stopPropagation();
	});
	
	document.addEventListener("click", ({target}) => {
		const isClickInsideMenu = mob_menu.contains(target) ||
			burger.contains(target) ||
			headerFirst.contains(target);
		
		if (!isClickInsideMenu && mob_menu.classList.contains("active")) {
			mob_menu.classList.remove("active");
			burger.classList.remove("active");
			body.classList.remove("lock");
			body.classList.remove("substrate");
		}
		
		const isClickInsideDropdown = header_dropdown_wrapper.contains(target);
		if (!isClickInsideDropdown && header_dropdown_wrapper.classList.contains("active")) {
			header_dropdown_wrapper.classList.remove("active");
		}
	});
	
	mob_menu.addEventListener("click", (e) => {
		e.stopPropagation();
	});
	
	header_dropdown.addEventListener("click", (e) => {
		e.stopPropagation();
		header_dropdown_wrapper.classList.toggle("active");
	});
	
	drop_down.addEventListener("click", (e) => {
		e.stopPropagation();
	});
})();