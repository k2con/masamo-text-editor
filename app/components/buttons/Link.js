export default function Link(props = {}) {
  const { addLink = () => {} } = props;
  
  return {
    tag: "button",
    options: {
      classList: "mte-tool",
      events: {
        click: addLink
      },
      attributes: {
        type: "button",
        "data-tool": "createLink"
      },
      children: [
        {
          tag: "img",
          options: {
            attributes: {
              src: "/assets/mte/img/InsertLink.svg",
              width: "16",
              height: "16"
            }
          }
        }
      ]
    }
  }
}