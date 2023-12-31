export default function JustifyCenter(props = {}) {
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
        "data-tool": "justifyCenter"
      },
      children: [
        {
          tag: "img",
          options: {
            attributes: {
              src: "/img/AlignCenter.svg",
              width: "16",
              height: "16"
            }
          }
        }
      ]
    }
  }
}