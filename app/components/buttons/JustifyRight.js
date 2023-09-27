export default function JustifyRight(props = {}) {
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
        "data-tool": "justifyRight"
      },
      children: [
        {
          tag: "img",
          options: {
            attributes: {
              src: "/assets/mte/img/AlignRight.svg",
              width: "16",
              height: "16"
            }
          }
        }
      ]
    }
  }
}