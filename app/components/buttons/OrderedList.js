export default function OrderedList(props = {}) {
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
        "data-tool": "insertOrderedList"
      },
      children: [
        {
          tag: "img",
          options: {
            attributes: {
              src: "/img/OrderedList.svg",
              width: "16",
              height: "16"
            }
          }
        }
      ]
    }
  }
}