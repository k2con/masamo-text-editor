import { buildElement } from "./utils";
import { EditorContainer } from "./components";

class MasamoTextEditor {
  constructor(selector, options = {}) {
    const defaultOpts = {
      useH1: true,
    };

    this.options = { ...defaultOpts, ...options };
    try {
      this.editor = document.querySelector(selector);

      // Create the main container element
      const container = EditorContainer();

      // Create the tool lines
      const toolLine1 = buildElement("div", {
        classList: "mte-tool-line",
        children: [
          {
            tag: "div",
            options: {
              classList: "mte-tool-group"
            }
          },
          {
            tag: "div",
            options: {
              classList: "mte-tool-group"
            }
          },
          {
            tag: "div",
            options: {
              classList: "mte-tool-group"
            }
          }
        ]
      });
      const toolLine2 = buildElement("div", {
        classList: "mte-tool-line",
        children: [
          {
            tag: "div",
            options: {
              classList: "mte-tool-group"
            }
          },
          {
            tag: "div",
            options: {
              classList: "mte-tool-group"
            }
          },
          {
            tag: "div",
            options: {
              classList: "mte-tool-group"
            }
          },
          {
            tag: "div",
            options: {
              classList: "mte-tool-group"
            }
          }
        ]
      });
      const toolLine3 = buildElement("div", {
        classList: "mte-tool-line",
        children: [
          {
            tag: "div",
            options: {
              classList: "mte-tool-group"
            }
          },
          {
            tag: "div",
            options: {
              classList: "mte-tool-group"
            }
          },
          {
            tag: "div",
            options: {
              classList: "mte-tool-group"
            }
          },
          {
            tag: "div",
            options: {
              classList: "mte-tool-group"
            }
          }
        ]
      });

      // Append tool lines to the tools container
      container.querySelector(".mte-tools").append(toolLine1, toolLine2, toolLine3);

      function excectAction(ev) {
        ev.preventDefault();
        const target = ev.target.closest(".mte-tool");
        const tool = target.dataset.tool;
        console.log(tool);
        document.execCommand(tool);
      }

      function toggleSelector(ev) {
        ev.preventDefault();
        const target = ev.target.closest(".mte-tool-selector");
        const options = target.querySelector(".mte-tool-selector-options");
        options.classList.toggle("mte-show");
      }

      function formatCode(code) {
        const formattedCode = code.replace(/</g, "\n<")
          .replace(/>/g, ">\n")
          .replace(/^\s*\n/gm, "")
          .replace(/\t/g, " ");
        let indentLevel = 0;
        const lines = formattedCode.split(/\r?\n/);
        
        for (let i = 0; i < lines.length; i++) {
          const line = lines[i].trim();
          
          if (line.startsWith("<")) {
            if (!line.endsWith("/>")) {
              if (line.startsWith("</")) {
                indentLevel--;
              }
              
              lines[i] = "\t".repeat(indentLevel) + line;
              
              if (!line.startsWith("</")) {
                indentLevel++;
              }
            } else {
              lines[i] = "\t".repeat(indentLevel) + line;
            }
          } else {
            lines[i] = "\t".repeat(indentLevel) + line;
          }
        }
        
        return lines.join("\n");
      }

      function toggleCode(ev) {
        ev.preventDefault();
        const content = container.querySelector(".mte-content");
        const codeTextarea = container.querySelector(".mte-code");
        codeTextarea.textContent = content.innerHTML;
        const code = codeTextarea.value;
        const formattedCode = formatCode(code)

        codeTextarea.textContent = formattedCode;
        content.classList.toggle("mte-hide");
        codeTextarea.classList.toggle("mte-hide");
      }

      function excectActionAndCloseSelector(ev) {
        ev.preventDefault();
        const target = ev.target.closest(".mte-tool-selector-option");
        const tool = target.dataset.tool;
        document.execCommand(tool.split("-")[0], false, tool.split("-")[1]);
        const options = document.querySelectorAll(".mte-tool-selector-options");
        options.forEach((option) => {
          option.classList.remove("mte-show");
        });
      }

      function formatBlock(ev) {
        ev.preventDefault();
        const target = ev.target.closest(".mte-tool");
        const tool = target.dataset.tool;
        console.log(tool);
        document.execCommand("formatBlock", false, tool);
      }

      function addLink(ev) {
        ev.preventDefault();
        const target = ev.target.closest(".mte-tool");
        const tool = target.dataset.tool;
        const url = prompt("Enter the link here: ", "https://");
        document.execCommand(tool, false, url);
      }

      function addImage(ev) {
        ev.preventDefault();
        // trigger the file input
        const input = document.createElement("input");
        input.type = "file";
        input.accept = "image/*";
        input.addEventListener("change", () => {
          const file = input.files[0];
          const reader = new FileReader();
          reader.addEventListener("load", () => {
            const img = new Image();
            img.src = reader.result;
            document.execCommand("insertImage", false, img.src);
          });
          reader.readAsDataURL(file);
        });
        input.click();
      }

      // Create the bold, italic, underline, and strikethrough buttons
      const boldButton = buildElement("button", {
        classList: "mte-tool",
        events: {
          click: excectAction
        },
        attributes: {
          type: "button",
          "data-tool": "bold"
        },
        children: [
          {
            tag: "i",
            options: {
              classList: "fas fa-bold"
            }
          }
        ]
      });
      const italicButton = buildElement("button", {
        classList: "mte-tool",
        events: {
          click: excectAction
        },
        attributes: {
          type: "button",
          "data-tool": "italic"
        },
        children: [
          {
            tag: "i",
            options: {
              classList: "fas fa-italic"
            }
          }
        ]
      });
      const underlineButton = buildElement("button", {
        classList: "mte-tool",
        events: {
          click: excectAction
        },
        attributes: {
          type: "button",
          "data-tool": "underline"
        },
        children: [
          {
            tag: "i",
            options: {
              classList: "fas fa-underline"
            }
          }
        ]
      });
      const strikethroughButton = buildElement("button", {
        classList: "mte-tool",
        events: {
          click: excectAction
        },
        attributes: {
          type: "button",
          "data-tool": "strikethrough"
        },
        children: [
          {
            tag: "i",
            options: {
              classList: "fas fa-strikethrough"
            }
          }
        ]
      });

      const toolLine1Group1 = toolLine1.querySelector(".mte-tool-group");
      toolLine1Group1.append(boldButton, italicButton, underlineButton, strikethroughButton);

      // Create the alignment buttons
      const leftButton = buildElement("button", {
        classList: "mte-tool",
        events: {
          click: excectAction
        },
        attributes: {
          type: "button",
          "data-tool": "justifyLeft"
        },
        children: [
          {
            tag: "i",
            options: {
              classList: "fas fa-align-left"
            }
          }
        ]
      });
      const centerButton = buildElement("button", {
        classList: "mte-tool",
        events: {
          click: excectAction
        },
        attributes: {
          type: "button",
          "data-tool": "justifyCenter"
        },
        children: [
          {
            tag: "i",
            options: {
              classList: "fas fa-align-center"
            }
          }
        ]
      });
      const rightButton = buildElement("button", {
        classList: "mte-tool",
        events: {
          click: excectAction
        },
        attributes: {
          type: "button",
          "data-tool": "justifyRight"
        },
        children: [
          {
            tag: "i",
            options: {
              classList: "fas fa-align-right"
            }
          }
        ]
      });
      const justifyButton = buildElement("button", {
        classList: "mte-tool",
        events: {
          click: excectAction
        },
        attributes: {
          type: "button",
          "data-tool": "justifyFull"
        },
        children: [
          {
            tag: "i",
            options: {
              classList: "fas fa-align-justify"
            }
          }
        ]
      });

      const toolLine1Group2 = toolLine1.querySelectorAll(".mte-tool-group")[1];
      toolLine1Group2.append(leftButton, centerButton, rightButton, justifyButton);

      // Create the list and indent buttons
      const orderedListButton = buildElement("button", {
        classList: "mte-tool",
        events: {
          click: excectAction
        },
        attributes: {
          type: "button",
          "data-tool": "insertOrderedList"
        },
        children: [
          {
            tag: "i",
            options: {
              classList: "fas fa-list-ol"
            }
          }
        ]
      });
      const unorderedListButton = buildElement("button", {
        classList: "mte-tool",
        events: {
          click: excectAction
        },
        attributes: {
          type: "button",
          "data-tool": "insertUnorderedList"
        },
        children: [
          {
            tag: "i",
            options: {
              classList: "fas fa-list-ul"
            }
          }
        ]
      });
      const outdentButton = buildElement("button", {
        classList: "mte-tool",
        events: {
          click: excectAction
        },
        attributes: {
          type: "button",
          "data-tool": "outdent"
        },
        children: [
          {
            tag: "i",
            options: {
              classList: "fas fa-outdent"
            }
          }
        ]
      });
      const indentButton = buildElement("button", {
        classList: "mte-tool",
        events: {
          click: excectAction
        },
        attributes: {
          type: "button",
          "data-tool": "indent"
        },
        children: [
          {
            tag: "i",
            options: {
              classList: "fas fa-indent"
            }
          }
        ]
      });
      const horizontalRuleButton = buildElement("button", {
        classList: "mte-tool",
        events: {
          click: excectAction
        },
        attributes: {
          type: "button",
          "data-tool": "insertHorizontalRule"
        },
        children: [
          {
            tag: "i",
            options: {
              classList: "fas fa-grip-lines"
            }
          }
        ]
      });

      const toolLine1Group3 = toolLine1.querySelectorAll(".mte-tool-group")[2];
      toolLine1Group3.append(orderedListButton, unorderedListButton, outdentButton, indentButton, horizontalRuleButton);

      // Create the font size selector
      const fontSizeSelector = buildElement("div", {
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
              text: "Font Size"
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
      });

      const toolLine2Group1 = toolLine2.querySelector(".mte-tool-group");
      toolLine2Group1.append(fontSizeSelector);

      // Create the font family selector
      const fontFamilySelector = buildElement("div", {
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
              text: "Font Family"
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
      });

      const toolLine2Group2 = toolLine2.querySelectorAll(".mte-tool-group")[1];
      toolLine2Group2.append(fontFamilySelector);

      // Create the heading, paragraph, font color, and font background color buttons
      const headingButton = buildElement("div", {
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
                  tag: "i",
                  options: {
                    classList: "fas fa-heading"
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
                this.options?.useH1
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
      });

      const paragraphButton = buildElement("button", {
        classList: "mte-tool",
        events: {
          click: formatBlock
        },
        attributes: {
          type: "button",
          "data-tool": "p"
        },
        children: [
          {
            tag: "i",
            options: {
              classList: "fas fa-paragraph"
            }
          }
        ]
      });

      const fontColorButton = buildElement("div", {
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
                  tag: "i",
                  options: {
                    classList: "fas fa-font"
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
                this.options?.colors?.primary 
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
                this.options?.colors?.secondary
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
                this.options?.colors?.success
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
                this.options?.colors?.danger
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
                this.options?.colors?.warning
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
                this.options?.colors?.info
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
                this.options?.colors?.light
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
                this.options?.colors?.dark
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
      });

      const fontBackgroundColorButton = buildElement("div", {
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
                  tag: "i",
                  options: {
                    classList: "fas fa-highlighter"
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
                this.options?.colors?.primary 
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
                this.options?.colors?.secondary
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
                this.options?.colors?.success
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
                this.options?.colors?.danger
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
                this.options?.colors?.warning
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
                this.options?.colors?.info
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
                this.options?.colors?.light
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
                this.options?.colors?.dark
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
      });

      const toolLine2Group3 = toolLine2.querySelectorAll(".mte-tool-group")[2];
      toolLine2Group3.append(headingButton, paragraphButton, fontColorButton, fontBackgroundColorButton);

      // Create the remove format button
      const removeFormatButton = buildElement("button", {
        classList: "mte-tool",
        events: {
          click: excectAction
        },
        attributes: {
          type: "button",
          "data-tool": "removeFormat"
        },
        children: [
          {
            tag: "i",
            options: {
              classList: "fas fa-eraser"
            }
          }
        ]
      });

      const toolLine2Group4 = toolLine2.querySelectorAll(".mte-tool-group")[3];
      toolLine2Group4.append(removeFormatButton);

      // Create the undo and redo buttons
      const undoButton = buildElement("button", {
        classList: "mte-tool",
        events: {
          click: excectAction
        },
        attributes: {
          type: "button",
          "data-tool": "undo"
        },
        children: [
          {
            tag: "i",
            options: {
              classList: "fas fa-undo"
            }
          }
        ]
      });

      const redoButton = buildElement("button", {
        classList: "mte-tool",
        events: {
          click: excectAction
        },
        attributes: {
          type: "button",
          "data-tool": "redo"
        },
        children: [
          {
            tag: "i",
            options: {
              classList: "fas fa-redo"
            }
          }
        ]
      });

      const toolLine4Group1 = toolLine3.querySelector(".mte-tool-group");
      toolLine4Group1.append(undoButton, redoButton);

      // Create the copy, paste, and cut buttons
      const copyButton = buildElement("button", {
        classList: "mte-tool",
        events: {
          click: excectAction
        },  
        attributes: {
          type: "button",
          "data-tool": "copy"
        },
        children: [
          {
            tag: "i",
            options: {
              classList: "fas fa-copy"
            }
          }
        ]
      });

      const pasteButton = buildElement("button", {
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
            tag: "i",
            options: {
              classList: "fas fa-paste"
            }
          }
        ]
      });

      const cutButton = buildElement("button", {
        classList: "mte-tool",
        events: {
          click: excectAction
        },
        attributes: {
          type: "button",
          "data-tool": "cut"
        },
        children: [
          {
            tag: "i",
            options: {
              classList: "fas fa-cut"
            }
          }
        ]
      });

      const toolLine4Group2 = toolLine3.querySelectorAll(".mte-tool-group")[1];
      toolLine4Group2.append(copyButton, pasteButton, cutButton);

      // Create the link and image buttons
      const linkButton = buildElement("button", {
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
            tag: "i",
            options: {
              classList: "fas fa-link"
            }
          }
        ]
      });

      const imageButton = buildElement("button", {
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
            tag: "i",
            options: {
              classList: "fas fa-image"
            }
          }
        ]
      });

      const toolLine4Group3 = toolLine3.querySelectorAll(".mte-tool-group")[2];
      toolLine4Group3.append(linkButton, imageButton);

      // Create the code button
      const codeButton = buildElement("button", {
        classList: "mte-tool",
        events: {
          click: toggleCode
        },
        attributes: {
          type: "button",
          "data-tool": "code"
        },
        children: [
          {
            tag: "i",
            options: {
              classList: "fas fa-code"
            }
          }
        ]
      });

      const toolLine4Group4 = toolLine3.querySelectorAll(".mte-tool-group")[3];
      toolLine4Group4.append(codeButton);

      // Append the main container to the editor
      this.editor.append(container);

      // close the selector when clicking outside of it or the trigger button
      document.addEventListener("click", (ev) => {
        const target = ev.target;
        if (!target.closest(".mte-tool-selector")) {
          const options = document.querySelectorAll(".mte-tool-selector-options");
          options.forEach((option) => {
            option.classList.remove("mte-show");
          });
        } else {
          const options = document.querySelectorAll(".mte-tool-selector-options");
          options.forEach((option) => {
            if (option !== target.closest(".mte-tool-selector").querySelector(".mte-tool-selector-options")) {
              option.classList.remove("mte-show");
            }
          });
        }
      });

      const content = this.editor.querySelector(".mte-content");

      // on focus, create a paragraph if there is no content
      content.addEventListener("focus", () => {
        console.log(content.innerHTML);
        if (content.innerHTML === "") {
          document.execCommand("formatBlock", false, "p");
        }
      });
      
      // Focus the editor
      content.focus();
    } catch (error) {
      console.error(error);
      // throw new Error("Please provide a valid selector");
    }
  }
}

window.MasamoTextEditor = MasamoTextEditor;
