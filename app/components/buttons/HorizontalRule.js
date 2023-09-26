export default function HorizontalRule(props = {}) {
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
        "data-tool": "insertHorizontalRule"
      },
      children: [
        {
          tag: "img",
          options: {
            attributes: {
              src: "/img/HorizontalRule.svg",
              width: "16",
              height: "16"
            }
          }
        }
      ]
    }
  }
}