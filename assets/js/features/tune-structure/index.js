export default function tuneStructure() {
	function initTuneStructure(root) {
		const table = root.querySelector(".headers");
		const checkboxes = root.querySelectorAll("input[type='checkbox'][data-col]");

		if (!table || !checkboxes.length) return;

		function apply() {
			checkboxes.forEach(cb => {
				const colIndex = Number(cb.dataset.col);
				localStorage.setItem(cb.dataset.col, cb.checked);

				for (const row of table.rows) {
					if (row.cells[colIndex]) {
						row.cells[colIndex].style.display = cb.checked ? "" : "none";
					}
				}
			});
		}

		checkboxes.forEach(cb => {
			const saved = localStorage.getItem(cb.dataset.col);
			if (saved !== null) cb.checked = saved === "true";
			cb.addEventListener("change", apply);
		});

		apply();
	}

	document.addEventListener("DOMContentLoaded", () => {
		document
			.querySelectorAll("[data-tune-structure]")
			.forEach(initTuneStructure);
	});
}
