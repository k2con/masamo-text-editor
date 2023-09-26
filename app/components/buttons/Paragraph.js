export default function Paragraph(props = {}) {
  const { formatBlock = () => {} } = props;
  
  return {
    tag: "button",
    options: {
      classList: "mte-tool",
      events: {
        click: formatBlock
      },
      attributes: {
        type: "button",
        "data-tool": "p"
      },
      children: [
        {
          tag: "img",
          options: {
            attributes: {
              src: "/img/ParagraphFormat.svg",
              width: "16",
              height: "16"
            }
          }
        }
      ]
    }
  }
}