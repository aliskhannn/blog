(function () {
	const key = "theme";
	const root = document.documentElement;
	const saved = localStorage.getItem(key);

	if (saved === "dark" || saved === "light") {
		root.dataset.theme = saved;
	}

	const btns = [
		document.getElementById("theme-toggle"),
		document.getElementById("theme-toggle-mobile"),
	].filter(Boolean);

	btns.forEach((btn) => {
		btn.addEventListener("click", () => {
			const next = root.dataset.theme === "dark" ? "light" : "dark";
			root.dataset.theme = next;
			localStorage.setItem(key, next);
		});
	});
})();
