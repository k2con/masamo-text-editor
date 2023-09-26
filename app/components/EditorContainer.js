import { buildElement } from "../utils";

export default function (props = { defaultContent: "" }) {
  const { defaultContent = "", toolLines = [] } = props;
  const container = {
    tag: "div",
    options: {
      classList: "mte-container",
      children: [
        {
          tag: "div",
          options: {
            classList: "mte-tools",
            children: toolLines
          }
        },
        {
          tag: "div",
          options: {
            classList: "mte-content",
            text: defaultContent,
            attributes: {
              contenteditable: true
            },
          }
        },
        {
          tag: "textarea",
          options: {
            classList: "mte-code mte-hide",
            attributes: {
              name: "mte-code",
              id: "mte-code",
              cols: 30,
              rows: 10
            }
          }
        }
      ]
    }
  };

  return buildElement(container.tag, container.options);
}