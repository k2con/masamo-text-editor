export default function JustifyFull(props = {}) {
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
        "data-tool": "justifyFull"
      },
      children: [
        {
          tag: "img",
          options: {
            attributes: {
              src: "/assets/mte/img/AlignJustify.svg",
              width: "16",
              height: "16"
            }
          }
        }
      ]
    }
  }
}