export default function UnorderedList(props = {}) {
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
        "data-tool": "insertUnorderedList"
      },
      children: [
        {
          tag: "img",
          options: {
            attributes: {
              src: "/img/UnorderedList.svg",
              width: "16",
              height: "16"
            }
          }
        }
      ]
    }
  }
}