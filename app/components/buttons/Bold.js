export default function Bold(props =  {}) {
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
        "data-tool": "bold"
      },
      children: [
        {
          tag:  "img",
          options: {
            attributes: {
              src: "/assets/mte/img/bold.svg",
              width: "16",
              height: "16"
            }
          }
        }
      ]
    }
  }
}