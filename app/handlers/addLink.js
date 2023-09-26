export default function addLink(ev) {
  ev.preventDefault();
  const target = ev.target.closest(".mte-tool");
  const tool = target.dataset.tool;
  const url = prompt("Enter the link here: ", "https://");
  document.execCommand(tool, false, url);
}