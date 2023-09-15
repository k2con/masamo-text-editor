import { buildElement } from "../utils";

export default function (props = { defaultContent: "" }) {
  const { defaultContent = "" } = props;
  console.log(defaultContent);
  const container = buildElement("div", {
    classList: "mte-container",
    children: [
      {
        tag: "div",
        options: {
          classList: "mte-tools"
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
  });

  return container;
}