export default function Outdent(props = {}) {
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
        "data-tool": "outdent"
      },
      children: [
        {
          tag: "img",
          options: {
            attributes: {
              src: "/img/Outdent.svg",
              width: "16",
              height: "16"
            }
          }
        }
      ]
    }
  }
}