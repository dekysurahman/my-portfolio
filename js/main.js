(() => {
	const modal = document.querySelector("#project-modal");
	const closeButtons = document.querySelectorAll(".modal-close, .modal-confirm");
	const storageKey = "portfolio-project-note-seen";

	if (!modal) {
		return;
	}

	const closeModal = () => {
		modal.hidden = true;
		sessionStorage.setItem(storageKey, "true");
	};

	if (sessionStorage.getItem(storageKey) !== "true") {
		modal.hidden = false;
		modal.querySelector(".modal-confirm").focus();
	}

	closeButtons.forEach((button) => {
		button.addEventListener("click", closeModal);
	});

	modal.addEventListener("click", (event) => {
		if (event.target === modal) {
			closeModal();
		}
	});

	document.addEventListener("keydown", (event) => {
		if (event.key === "Escape" && !modal.hidden) {
			closeModal();
		}
	});
})();
