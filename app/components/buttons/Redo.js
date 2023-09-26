export default function Redo(props = {}) {
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
        "data-tool": "redo"
      },
      children: [
        {
          tag: "img",
          options: {
            attributes: {
              src: "/img/Redo.svg",
              width: "16",
              height: "16"
            }
          }
        }
      ]
    }
  }
}