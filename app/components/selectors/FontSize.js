export default function FontSize(props = {}) {
  const { toggleSelector = () => {},  excectActionAndCloseSelector = () => {} } = props;
  return {
    tag: "div",
    options: {
      classList: "mte-tool-selector",
      children: [
        {
          tag: "button",
          options: {
            classList: "mte-tool mte-tool-selector-trigger",
            events: {
              click: toggleSelector
            },
            attributes: {
              type: "button",
              "data-tool": "font-size"
            },
            children: [
              {
                tag: "img",
                options: {
                  attributes: {
                    src: "/assets/mte/img/FontSize.svg",
                    width: "16",
                    height: "16"
                  }
                }
              }
            ]
          }
        },
        {
          tag: "div",
          options: {
            classList: "mte-tool-selector-options",
            children: [
              {
                tag: "button",
                options: {
                  classList: "mte-tool-selector-option",
                  events: {
                    click: excectActionAndCloseSelector
                  },
                  attributes: {
                    type: "button",
                    "data-tool": "fontSize-1"
                  },
                  text: "1"
                }
              },
              {
                tag: "button",
                options: {
                  classList: "mte-tool-selector-option",
                  events: {
                    click: excectActionAndCloseSelector
                  },
                  attributes: {
                    type: "button",
                    "data-tool": "fontSize-2"
                  },
                  text: "2"
                }
              },
              {
                tag: "button",
                options: {
                  classList: "mte-tool-selector-option",
                  events: {
                    click: excectActionAndCloseSelector
                  },
                  attributes: {
                    type: "button",
                    "data-tool": "fontSize-3"
                  },
                  text: "3"
                }
              },
              {
                tag: "button",
                options: {
                  classList: "mte-tool-selector-option",
                  events: {
                    click: excectActionAndCloseSelector
                  },
                  attributes: {
                    type: "button",
                    "data-tool": "fontSize-4"
                  },
                  text: "4"
                }
              },
              {
                tag: "button",
                options: {
                  classList: "mte-tool-selector-option",
                  events: {
                    click: excectActionAndCloseSelector
                  },
                  attributes: {
                    type: "button",
                    "data-tool": "fontSize-5"
                  },
                  text: "5"
                }
              },
              {
                tag: "button",
                options: {
                  classList: "mte-tool-selector-option",
                  events: {
                    click: excectActionAndCloseSelector
                  },
                  attributes: {
                    type: "button",
                    "data-tool": "fontSize-6"
                  },
                  text: "6"
                }
              },
              {
                tag: "button",
                options: {
                  classList: "mte-tool-selector-option",
                  events: {
                    click: excectActionAndCloseSelector
                  },
                  attributes: {
                    type: "button",
                    "data-tool": "fontSize-7"
                  },
                  text: "7"
                }
              },
            ]
          }
        }
      ]
    }
  }
}