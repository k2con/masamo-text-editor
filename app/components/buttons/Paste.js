export default function Paste(props = {}) {
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
        "data-tool": "paste"
      },
      children: [
        {
          tag: "img",
          options: {
            attributes: {
              src: "/assets/mte/img/Paste.svg",
              width: "16",
              height: "16"
            }
          }
        }
      ]
    }
  }
}