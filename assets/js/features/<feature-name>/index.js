// Template for good practice and avoiding breaking javascript on the whole site
export default function initFeature() {
  // rename [data-feature] with [data-my-new-feature]
  // put that attribute on the wrapping HTML element
  const root = document.querySelector("[data-feature]");
  if (!root) return;

  try {
    // feature logic here
  } catch (e) {
    console.warn("Feature disabled:", e);
  }
}
