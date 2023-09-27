export default function Code(props = {}) {
  const { toggleCode = () => {} } = props;
  return {
    tag: "button",
    options: {
      classList: "mte-tool",
      events: {
        click: toggleCode
      },
      attributes: {
        type: "button",
        "data-tool": "code"
      },
      children: [
        {
          tag: "img",
          options: {
            attributes: {
              src: "/assets/mte/img/html.svg",
              width: "16",
              height: "16"
            }
          }
        }
      ]
    }
  }
}