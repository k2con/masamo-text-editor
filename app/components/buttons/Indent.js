export default function Indent(props = {}) {
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
        "data-tool": "indent"
      },
      children: [
        {
          tag: "img",
          options: {
            attributes: {
              src: "/assets/mte/img/Indent.svg",
              width: "16",
              height: "16"
            }
          }
        }
      ]
    }
  }
}