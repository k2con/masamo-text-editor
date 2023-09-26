export default function Italic(props = {}) {
  const { excectAction = () => {} } = props;

  return {
    tag: "button",
    options: {
      classList: "mte-tool",
      events: {
        click: excectAction
      },
      attributes: {
        type: "button",
        "data-tool": "italic"
      },
      children: [
        {
          tag: "img",
          options: {
            attributes: {
              src: "/img/Italic.svg",
              width: "16",
              height: "16"
            }
          }
        }
      ]
    }
  }
}