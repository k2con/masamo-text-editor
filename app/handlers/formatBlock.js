export default function formatBlock(ev) {
  ev.preventDefault();
  const target = ev.target.closest(".mte-tool");
  const tool = target.dataset.tool;
  console.log(tool);
  document.execCommand("formatBlock", false, tool);
}