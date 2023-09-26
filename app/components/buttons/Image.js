export default function Image(props = {}) {
  const { addImage = () => {} } = props;
  return {
    tag: "button",
    options: {
      classList: "mte-tool",
      events: {
        click: addImage
      },
      attributes: {
        type: "button",
        "data-tool": "image"
      },
      children: [
        {
          tag: "img",
          options: {
            attributes: {
              src: "/img/InsertImage.svg",
              width: "16",
              height: "16"
            }
          }
        }
      ]
    }
  }
}