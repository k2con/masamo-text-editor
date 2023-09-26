export default function Heading(props = {}, options = {}) {
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
              "data-tool": "heading",
            },
            children: [
              {
                tag: "img",
                options: {
                  attributes: {
                    src: "/img/Headings.svg",
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
              options?.useH1
                ? {
                  tag: "button",
                  options: {
                    classList: "mte-tool-selector-option",
                    events: {
                      click: excectActionAndCloseSelector
                    },
                    attributes: {
                      "data-tool": "formatBlock-h1"
                    },
                    children: [
                      {
                        tag: "h1",
                        options: {
                          text: "Heading 1"
                        }
                      }
                    ],
                  }
                } : {},
              {
                tag: "button",
                options: {
                  classList: "mte-tool-selector-option",
                  events: {
                    click: excectActionAndCloseSelector,
                  },
                  attributes: {
                    "data-tool": "formatBlock-h2"
                  },
                  children: [
                    {
                      tag: "h2",
                      options: {
                        text: "Heading 2"
                      }
                    }
                  ],
                }
              },
              {
                tag: "button",
                options: {
                  classList: "mte-tool-selector-option",
                  events: {
                    click: excectActionAndCloseSelector,
                  },
                  attributes: {
                    "data-tool": "formatBlock-h3"
                  },
                  children: [
                    {
                      tag: "h3",
                      options: {
                        text: "Heading 3"
                      }
                    }
                  ],
                }
              },
              {
                tag: "button",
                options: {
                  classList: "mte-tool-selector-option",
                  events: {
                    click: excectActionAndCloseSelector,
                  },
                  attributes: {
                    "data-tool": "formatBlock-h4"
                  },
                  children: [
                    {
                      tag: "h4",
                      options: {
                        text: "Heading 4"
                      }
                    }
                  ],
                }
              },
              {
                tag: "button",
                options: {
                  classList: "mte-tool-selector-option",
                  events: {
                    click: excectActionAndCloseSelector,
                  },
                  attributes: {
                    "data-tool": "formatBlock-h5"
                  },
                  children: [
                    {
                      tag: "h5",
                      options: {
                        text: "Heading 5"
                      }
                    }
                  ],
                }
              },
              {
                tag: "button",
                options: {
                  classList: "mte-tool-selector-option",
                  events: {
                    click: excectActionAndCloseSelector,
                  },
                  attributes: {
                    "data-tool": "formatBlock-h6"
                  },
                  children: [
                    {
                      tag: "h6",
                      options: {
                        text: "Heading 6"
                      }
                    }
                  ],
                }
              },
            ]
          }
        }
      ]
    }
  }
}