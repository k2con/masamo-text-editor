export default function excectActionAndCloseSelector(ev) {
  ev.preventDefault();
  const target = ev.target.closest(".mte-tool-selector-option");
  const tool = target.dataset.tool;
  document.execCommand(tool.split("-")[0], false, tool.split("-")[1]);
  const options = document.querySelectorAll(".mte-tool-selector-options");
  options.forEach((option) => {
    option.classList.remove("mte-show");
  });
}