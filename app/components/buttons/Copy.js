export default function Copy(props = {}) {
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
        "data-tool": "copy"
      },
      children: [
        {
          tag: "img",
          options: {
            attributes: {
              src: "/img/Copy.svg",
              width: "16",
              height: "16"
            }
          }
        }
      ]
    }
  }
}