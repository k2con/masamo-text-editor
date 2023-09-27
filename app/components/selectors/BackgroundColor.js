export default function BackgroundColor(props = {}, options = {}) {
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
            },
            children: [
              {
                tag: "img",
                options: {
                  attributes: {
                    src: "/assets/mte/img/BackgroundColor.svg",
                    width: "16",
                    height: "16"
                  }
                }
              }
            ]
          }
        },
        // (primary, secondary, success, danger, warning, info, light, dark, body, white, black-50, white-50)
        {
          tag: "div",
          options: {
            classList: "mte-tool-selector-options",
            children: [
              options?.colors?.primary 
                ? {
                  tag: "button",
                  options: {
                    classList: "mte-tool-selector-option",
                    events: {
                      click: excectActionAndCloseSelector,
                    },
                    attributes: {
                      "data-tool": `backColor-${options.colors.primary}`
                    },
                    children: [
                      {
                        tag: "span",
                        options: {
                          style: `background-color: ${options.colors.primary}`,
                          text: "Primary"
                        }
                      }
                    ],
                  }
                } : {},
              options?.colors?.secondary
                ? {
                  tag: "button",
                  options: {
                    classList: "mte-tool-selector-option",
                    events: {
                      click: excectActionAndCloseSelector,
                    },
                    attributes: {
                      "data-tool": `backColor-${options.colors.secondary}`
                    },
                    children: [
                      {
                        tag: "span",
                        options: {
                          style: `background-color: ${options.colors.secondary}`,
                          text: "Secondary"
                        }
                      }
                    ],
                  }
                } : {},
              options?.colors?.success
                ? {
                  tag: "button",
                  options: {
                    classList: "mte-tool-selector-option",
                    events: {
                      click: excectActionAndCloseSelector,
                    },
                    attributes: {
                      "data-tool": `backColor-${options.colors.success}`
                    },
                    children: [
                      {
                        tag: "span",
                        options: {
                          style: `background-color: ${options.colors.success}`,
                          text: "Success"
                        }
                      }
                    ],
                  }
                } : {},
              options?.colors?.danger
                ? {
                  tag: "button",
                  options: {
                    classList: "mte-tool-selector-option",
                    events: {
                      click: excectActionAndCloseSelector,
                    },
                    attributes: {
                      "data-tool": `backColor-${options.colors.danger}`
                    },
                    children: [
                      {
                        tag: "span",
                        options: {
                          style: `background-color: ${options.colors.danger}`,
                          text: "Danger"
                        }
                      }
                    ],
                  }
                } : {},
              options?.colors?.warning
                ? {
                  tag: "button",
                  options: {
                    classList: "mte-tool-selector-option",
                    events: {
                      click: excectActionAndCloseSelector,
                    },
                    attributes: {
                      "data-tool": `backColor-${options.colors.warning}`
                    },
                    children: [
                      {
                        tag: "span",
                        options: {
                          style: `background-color: ${options.colors.warning}`,
                          text: "Warning"
                        }
                      }
                    ],
                  }
                } : {},
              options?.colors?.info
                ? {
                  tag: "button",
                  options: {
                    classList: "mte-tool-selector-option",
                    events: {
                      click: excectActionAndCloseSelector,
                    },
                    attributes: {
                      "data-tool": `backColor-${options.colors.info}`
                    },
                    children: [
                      {
                        tag: "span",
                        options: {
                          style: `background-color: ${options.colors.info}`,
                          text: "Info"
                        }
                      } 
                    ],
                  }
                } : {},
              options?.colors?.light
                ? {
                  tag: "button",
                  options: {
                    classList: "mte-tool-selector-option",
                    events: {
                      click: excectActionAndCloseSelector,
                    },
                    attributes: {
                      "data-tool": `backColor-${options.colors.light}`
                    },
                    children: [
                      {
                        tag: "span",
                        options: {
                          style: `background-color: ${options.colors.light}`,
                          text: "Light"
                        }
                      }
                    ],
                  }
                } : {},
              options?.colors?.dark
                ? {
                  tag: "button",
                  options: {
                    classList: "mte-tool-selector-option",
                    events: {
                      click: excectActionAndCloseSelector,
                    },
                    attributes: { "data-tool": `backColor-${options.colors.dark}` },
                    children: [
                      {
                        tag: "span",
                        options: {
                          style: `background-color: ${options.colors.dark}`,
                          text: "Dark"
                        }
                      }
                    ],
                  }
                } : {},
              // (grey scale)
              {
                tag: "button",
                options: {
                  classList: "mte-tool-selector-option",
                  events: {
                    click: excectActionAndCloseSelector,
                  },
                  attributes: { "data-tool": "backColor-black" },
                  children: [
                    {
                      tag: "span",
                      options: {
                        style: "background-color: rgba(0, 0, 0)",
                        text: "Black"
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
                  attributes: { "data-tool": "backColor-black-50" },
                  children: [
                    {
                      tag: "span",
                      options: {
                        style: "background-color: rgba(0, 0, 0, 0.5)",
                        text: "Black 50%"
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
                  attributes: { "data-tool": "backColor-white-50" },
                  children: [
                    {
                      tag: "span",
                      options: {
                        style: "background-color: rgba(255, 255, 255, 0.5)",
                        text: "White 50%"
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
                  attributes: { "data-tool": "backColor-white" },
                  children: [
                    {
                      tag: "span",
                      options: {
                        style: "background-color: rgba(255, 255, 255,)",
                        text: "White"
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
                  attributes: { "data-tool": "backColor-grey" },
                  children: [
                    {
                      tag: "span",
                      options: {
                        style: "background-color: grey",
                        text: "Grey"
                      }
                    }
                  ],
                }
              },
              // (red, pink, purple, indigo, blue, cyan, teal, green, lime, yellow, orange, brown)
              {
                tag: "button",
                options: {
                  classList: "mte-tool-selector-option",
                  events: {
                    click: excectActionAndCloseSelector,
                  },
                  attributes: { "data-tool": "backColor-red" },
                  children: [
                    {
                      tag: "span",
                      options: {
                        style: "background-color: red",
                        text: "Red"
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
                  attributes: { "data-tool": "backColor-pink" },
                  children: [
                    {
                      tag: "span",
                      options: {
                        style: "background-color: pink",
                        text: "Pink"
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
                  attributes: { "data-tool": "backColor-purple" },
                  children: [
                    {
                      tag: "span",
                      options: {
                        style: "background-color: purple",
                        text: "Purple"
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
                  attributes: { "data-tool": "backColor-indigo" },
                  children: [
                    {
                      tag: "span",
                      options: {
                        style: "background-color: indigo",
                        text: "Indigo"
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
                  attributes: { "data-tool": "backColor-blue" },
                  children: [
                    {
                      tag: "span",
                      options: {
                        style: "background-color: blue",
                        text: "Blue"
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
                  attributes: { "data-tool": "backColor-cyan" },
                  children: [
                    {
                      tag: "span",
                      options: {
                        style: "background-color: cyan",
                        text: "Cyan"
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
                  attributes: { "data-tool": "backColor-teal" },
                  children: [
                    {
                      tag: "span",
                      options: {
                        style: "background-color: teal",
                        text: "Teal"
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
                  attributes: { "data-tool": "backColor-green" },
                  children: [
                    {
                      tag: "span",
                      options: {
                        style: "background-color: green",
                        text: "Green"
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
                  attributes: { "data-tool": "backColor-lime" },
                  children: [
                    {
                      tag: "span",
                      options: {
                        style: "background-color: lime",
                        text: "Lime"
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
                  attributes: { "data-tool": "backColor-yellow" },
                  children: [
                    {
                      tag: "span",
                      options: {
                        style: "background-color: yellow",
                        text: "Yellow"
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
                  attributes: { "data-tool": "backColor-orange" },
                  children: [
                    {
                      tag: "span",
                      options: {
                        style: "background-color: orange",
                        text: "Orange"
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
                  attributes: { "data-tool": "backColor-brown" },
                  children: [
                    {
                      tag: "span",
                      options: {
                        style: "background-color: brown",
                        text: "Brown"
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