export default function toggleSelector(ev) {
  ev.preventDefault();
  const target = ev.target.closest(".mte-tool-selector");
  const options = target.querySelector(".mte-tool-selector-options");
  options.classList.toggle("mte-show");
}