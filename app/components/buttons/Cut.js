export default function Cut(props = {}) {
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
        "data-tool": "cut"
      },
      children: [
        {
          tag: "img",
          options: {
            attributes: {
              src: "/assets/mte/img/Cut.svg",
              width: "16",
              height: "16"
            }
          }
        }
      ]
    }
  }
}