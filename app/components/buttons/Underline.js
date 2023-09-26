export default  function Underline(props = {}) {
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
        "data-tool": "underline"
      },
      children: [
        {
          tag: "img",
          options: {
            attributes: {
              src: "/img/Underline.svg",
              width: "16",
              height: "16"
            }
          }
        }
      ]
    }
  }
}