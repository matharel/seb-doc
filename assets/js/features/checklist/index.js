export default function initChecklist() {
  const roots = document.querySelectorAll("[data-checklist]");
  if (!roots.length) return;

  try {
    roots.forEach(root => {
      const buttons = root.querySelectorAll(".uncheck-all");
      if (!buttons.length) return;

      buttons.forEach(button => {
        button.addEventListener("click", () => {
          root
            .querySelectorAll('input[type="checkbox"]:checked')
            .forEach(checkbox => {
              checkbox.click();
            });
        });
      });
    });
  } catch (e) {
    console.warn("Checklist feature disabled:", e);
  }
}
