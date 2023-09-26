export default function FontFamily(props = {}) {
  const { toggleSelector = () => {}, excectActionAndCloseSelector = () => {} } = props;
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
              "data-tool": "font-family"
            },
            children: [
              {
                tag: "img",
                options: {
                  attributes: {
                    src: "/img/FontFamily.svg",
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
                    "data-tool": "fontName-Arial"
                  },
                  text: "Arial"
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
                    "data-tool": "fontName-Arial Black"
                  },
                  text: "Arial Black"
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
                    "data-tool": "fontName-Comic Sans MS"
                  },
                  text: "Comic Sans MS"
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
                    "data-tool": "fontName-Courier New"
                  },
                  text: "Courier New"
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
                    "data-tool": "fontName-Georgia"
                  },
                  text: "Georgia"
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
                    "data-tool": "fontName-Helvetica"
                  },
                  text: "Helvetica"
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
                    "data-tool": "fontName-Impact"
                  },
                  text: "Impact"
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
                    "data-tool": "fontName-Times New Roman"
                  },
                  text: "Times New Roman"
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
                    "data-tool": "fontName-Trebuchet MS"
                  },
                  text: "Trebuchet MS"
                }
              },
              {
                tag: "button",
                options: {
                  classList: "mte-tool-selector-option",
                  events: {
                    click: excectActionAndCloseSelector
                  },
                  attributes: { "data-tool": "fontName-Verdana" },
                  text: "Verdana"
                }
              },
              {
                tag: "button",
                options: {
                  classList: "mte-tool-selector-option",
                  events: {
                    click: excectActionAndCloseSelector
                  },
                  attributes: { "data-tool": "fontName-Tahoma" },
                  text: "Tahoma"
                }
              },
              {
                tag: "button",
                options: {
                  classList: "mte-tool-selector-option",
                  events: {
                    click: excectActionAndCloseSelector
                  },
                  attributes: { "data-tool": "fontName-Lucida Console" },
                  text: "Lucida Console"
                }
              }
            ]
          }
        }
      ]
    }
  }
}