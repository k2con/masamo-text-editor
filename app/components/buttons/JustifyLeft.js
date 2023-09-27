export default function JustifyLeft(props = {}) {
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
        "data-tool": "justifyLeft"
      },
      children: [
        {
          tag: "img",
          options: {
            attributes: {
              src: "/assets/mte/img/AlignLeft.svg",
              width: "16",
              height: "16"
            }
          }
        }
      ]
    }
  }
}