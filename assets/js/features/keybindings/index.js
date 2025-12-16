export default function initKeybindings() {
  const tables = document.querySelectorAll("table[data-keybindings]");
  if (!tables.length) return; // nothing to do

  const applyShift = () => tables.forEach(table => {
    table.classList.add("shift");
    table.classList.remove("default");
  });

  const removeShift = () => tables.forEach(table => {
    table.classList.remove("shift");
    table.classList.add("default");
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Shift") applyShift();
  });

  document.addEventListener("keyup", (e) => {
    if (e.key === "Shift") removeShift();
  });
}
