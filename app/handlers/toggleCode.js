export default function toggleCode(ev) {
  ev.preventDefault();
  const container = document.querySelector(".mte-container");
  const content = container.querySelector(".mte-content");
  const codeTextarea = container.querySelector(".mte-code");
  codeTextarea.textContent = content.innerHTML;
  const code = codeTextarea.value;
  const formattedCode = formatCode(code)

  codeTextarea.textContent = formattedCode;
  content.classList.toggle("mte-hide");
  codeTextarea.classList.toggle("mte-hide");

  function formatCode(code) {
    const formattedCode = code.replace(/</g, "\n<")
      .replace(/>/g, ">\n")
      .replace(/^\s*\n/gm, "")
      .replace(/\t/g, " ");
    let indentLevel = 0;
    const lines = formattedCode.split(/\r?\n/);

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i].trim();

      if (line.startsWith("<")) {
        if (!line.endsWith("/>")) {
          if (line.startsWith("</")) {
            indentLevel--;
          }

          lines[i] = "\t".repeat(indentLevel) + line;

          if (!line.startsWith("</")) {
            indentLevel++;
          }
        } else {
          lines[i] = "\t".repeat(indentLevel) + line;
        }
      } else {
        lines[i] = "\t".repeat(indentLevel) + line;
      }
    }

    return lines.join("\n");
  }
}