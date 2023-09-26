export default function Strikethrough(props = {}) {
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
        "data-tool": "strikethrough"
      },
      children: [
        {
          tag: "img",
          options: {
            attributes: {
              src: "/img/Strikethrough.svg",
              width: "16",
              height: "16"
            }
          }
        }
      ]
    }
  }
}