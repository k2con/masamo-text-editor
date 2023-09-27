export default function Undo(props = {}) {
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
        "data-tool": "undo"
      },
      children: [
        {
          tag: "img",
          options: {
            attributes: {
              src: "/assets/mte/img/Undo.svg",
              width: "16",
              height: "16"
            }
          }
        }
      ]
    }
  }
}