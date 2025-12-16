export default function initHiddenEmailPhone() {
	document.addEventListener("DOMContentLoaded", () => {
		// Email
		document.querySelectorAll("[data-email]").forEach(el => {
			const encoded = el.dataset.email;
			if (!encoded) return;

			const email = atob(encoded);

			const link = document.createElement("a");
			link.href = `mailto:${email}`;
			link.textContent = email;
			link.setAttribute("aria-label", email);

			el.appendChild(link);
		});

		// Phone
		document.querySelectorAll("[data-phone]").forEach(el => {
			const encoded = el.dataset.phone;
			if (!encoded) return;

			const phone = atob(encoded);

			const link = document.createElement("a");
			link.href = `tel:${phone}`;
			link.textContent = phone;
			link.setAttribute("aria-label", phone);

			el.appendChild(link);
		});
	});
}
