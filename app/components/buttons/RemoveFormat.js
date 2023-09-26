export default function RemoveFormat(props = {}) {
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
        "data-tool": "removeFormat"
      },
      children: [
        {
          tag: "img",
          options: {
            attributes: {
              src: "/img/RemoveFormating.svg",
              width: "16",
              height: "16"
            }
          }
        }
      ]
    }
  }
}