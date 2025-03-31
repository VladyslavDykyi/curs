"use strict";
(function () {
	const body = document.querySelector("body");
	const modal = document.querySelector("#modal");
	const glossaryList = document.querySelector(".glossary-list");
	const closeBtn = modal.querySelector(".modal-close");
	
	const toggleModal = (isOpen) => {
		modal.dataset.open = isOpen;
		body.classList.add("lock");
		if (isOpen) {
			document.addEventListener("keydown", handleEscape);
			
		} else {
			body.classList.remove("lock");
			document.removeEventListener("keydown", handleEscape);
		}
	};
	
	const handleEscape = (e) => {
		if (e.key === "Escape") {
			toggleModal(false);
			body.classList.remove("lock");
		}
	};
	
	glossaryList.addEventListener("click", ({ target }) => {
		if (target.classList.contains("btn-glossary")) {
			toggleModal(true);
		}
	});
	
	closeBtn.addEventListener("click", () => toggleModal(false));
	
	modal.addEventListener("click", ({ target }) => {
		if (target.classList.contains("modal-bg")) {
			toggleModal(false);
		}
	});
})();