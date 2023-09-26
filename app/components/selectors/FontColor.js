export default function FontColor(props = {}, options = {}) {
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
                    src: "/img/FontColor.svg",
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
                      "data-tool": `foreColor-${options.colors.primary}`
                    },
                    children: [
                      {
                        tag: "span",
                        options: {
                          style: `color: ${options.colors.primary}`,
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
                      "data-tool": `foreColor-${options.colors.secondary}`
                    },
                    children: [
                      {
                        tag: "span",
                        options: {
                          style: `color: ${options.colors.secondary}`,
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
                      "data-tool": `foreColor-${options.colors.success}`
                    },
                    children: [
                      {
                        tag: "span",
                        options: {
                          style: `color: ${options.colors.success}`,
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
                      "data-tool": `foreColor-${options.colors.danger}`
                    },
                    children: [
                      {
                        tag: "span",
                        options: {
                          style: `color: ${options.colors.danger}`,
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
                      "data-tool": `foreColor-${options.colors.warning}`
                    },
                    children: [
                      {
                        tag: "span",
                        options: {
                          style: `color: ${options.colors.warning}`,
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
                      "data-tool": `foreColor-${options.colors.info}`
                    },
                    children: [
                      {
                        tag: "span",
                        options: {
                          style: `color: ${options.colors.info}`,
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
                      "data-tool": `foreColor-${options.colors.light}`
                    },
                    children: [
                      {
                        tag: "span",
                        options: {
                          style: `color: ${options.colors.light}`,
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
                    attributes: { "data-tool": `foreColor-${options.colors.dark}` },
                    children: [
                      {
                        tag: "span",
                        options: {
                          style: `color: ${options.colors.dark}`,
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
                  attributes: { "data-tool": "foreColor-black" },
                  children: [
                    {
                      tag: "span",
                      options: {
                        style: "color: rgba(0, 0, 0)",
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
                  attributes: { "data-tool": "foreColor-black-50" },
                  children: [
                    {
                      tag: "span",
                      options: {
                        style: "color: rgba(0, 0, 0, 0.5)",
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
                  attributes: { "data-tool": "foreColor-white-50" },
                  children: [
                    {
                      tag: "span",
                      options: {
                        style: "color: rgba(255, 255, 255, 0.5)",
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
                  attributes: { "data-tool": "foreColor-white" },
                  children: [
                    {
                      tag: "span",
                      options: {
                        style: "color: rgba(255, 255, 255,)",
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
                  attributes: { "data-tool": "foreColor-grey" },
                  children: [
                    {
                      tag: "span",
                      options: {
                        style: "color: grey",
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
                  attributes: { "data-tool": "foreColor-red" },
                  children: [
                    {
                      tag: "span",
                      options: {
                        style: "color: red",
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
                  attributes: { "data-tool": "foreColor-pink" },
                  children: [
                    {
                      tag: "span",
                      options: {
                        style: "color: pink",
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
                  attributes: { "data-tool": "foreColor-purple" },
                  children: [
                    {
                      tag: "span",
                      options: {
                        style: "color: purple",
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
                  attributes: { "data-tool": "foreColor-indigo" },
                  children: [
                    {
                      tag: "span",
                      options: {
                        style: "color: indigo",
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
                  attributes: { "data-tool": "foreColor-blue" },
                  children: [
                    {
                      tag: "span",
                      options: {
                        style: "color: blue",
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
                  attributes: { "data-tool": "foreColor-cyan" },
                  children: [
                    {
                      tag: "span",
                      options: {
                        style: "color: cyan",
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
                  attributes: { "data-tool": "foreColor-teal" },
                  children: [
                    {
                      tag: "span",
                      options: {
                        style: "color: teal",
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
                  attributes: { "data-tool": "foreColor-green" },
                  children: [
                    {
                      tag: "span",
                      options: {
                        style: "color: green",
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
                  attributes: { "data-tool": "foreColor-lime" },
                  children: [
                    {
                      tag: "span",
                      options: {
                        style: "color: lime",
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
                  attributes: { "data-tool": "foreColor-yellow" },
                  children: [
                    {
                      tag: "span",
                      options: {
                        style: "color: yellow",
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
                  attributes: { "data-tool": "foreColor-orange" },
                  children: [
                    {
                      tag: "span",
                      options: {
                        style: "color: orange",
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
                  attributes: { "data-tool": "foreColor-brown" },
                  children: [
                    {
                      tag: "span",
                      options: {
                        style: "color: brown",
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