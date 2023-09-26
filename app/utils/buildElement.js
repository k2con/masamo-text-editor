export default function buildElement(tag, options = { id: "", classList: "", children: [], attributes: {}, events: {}, text: "", html: "", svg: null }) {
  const { id = "", classList = "", children = [], attributes = {}, events = {}, text = "", html = "", svg = null } = options;
  const element = document.createElement(tag);
  element.id = id;
  element.innerHTML = text.replace(/\\x([0-9A-Fa-f]{2})/g, (_, hex) => String.fromCharCode(parseInt(hex, 16)));
  if (html) element.innerHTML = html;
  if (svg) {
    const doc = new DOMParser().parseFromString(svg, 'application/xml');
    element.appendChild(doc.documentElement);
  }
  classList?.split(" ").forEach((className) => {
    if (className) element.classList.add(className);
  });
  Object.entries(attributes).forEach(([key, value]) => {
    if (key === "disabled" || key === "checked") {
      if (value) element.setAttribute(key, value);
    }
    else element.setAttribute(key, value);
  });
  Object.entries(events).forEach(([key, value]) => {
    element.removeEventListener(key, value);
    element.addEventListener(key, value);
  });
  // # children is an array of objects with tag and options
  children?.forEach((child) => {
    const { tag, options } = child;
    element.append(buildElement(tag, options));
  });
  return element;
}