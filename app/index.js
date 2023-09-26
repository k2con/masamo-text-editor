import { EditorContainer, ToolsLine, Selectors, Buttons } from "./components";
import { addImage, addLink, excectAction, toggleSelector, excectActionAndCloseSelector, formatBlock, toggleCode } from "./handlers";
const { BackgroundColor, FontColor, FontFamily, FontSize, Heading } = Selectors;
const { Bold, Italic, Underline, Strikethrough, JustifyLeft, JustifyCenter, JustifyRight, JustifyFull, OrderedList, UnorderedList, Outdent, Indent, HorizontalRule, Paragraph, RemoveFormat, Undo, Redo, Copy, Paste, Cut, Link, Image, Code } = Buttons;

class MasamoTextEditor {
  constructor(selector, options = {}) {
    const defaultOpts = {
      useH1: true,
      defaultContent: "",
    };

    this.options = { ...defaultOpts, ...options };

    const { defaultContent = "" } = this.options;
    try {
      this.editor = document.querySelector(selector);

      excectAction.bind(this);
      toggleSelector.bind(this);
      excectActionAndCloseSelector.bind(this);
      formatBlock.bind(this);
      addLink.bind(this);
      addImage.bind(this);
      toggleCode.bind(this);

      const toolLine1 = ToolsLine({
        groups: [
          [Bold({ excectAction }), Italic({ excectAction }), Underline({ excectAction }), Strikethrough({ excectAction })],
          [JustifyLeft({ excectAction }), JustifyCenter({ excectAction }), JustifyRight({ excectAction }), JustifyFull({ excectAction })],
          [OrderedList({ excectAction }), UnorderedList({ excectAction }), Indent({ excectAction }), Outdent({ excectAction }), HorizontalRule({ excectAction })],
        ],
      });
      const toolLine2 = ToolsLine({
        groups: [
          [FontSize({ toggleSelector, excectActionAndCloseSelector }), FontFamily({ toggleSelector, excectActionAndCloseSelector }), Heading({ toggleSelector, excectActionAndCloseSelector }, this.options)],
          [FontColor({ toggleSelector, excectActionAndCloseSelector }, this.options), BackgroundColor({ toggleSelector, excectActionAndCloseSelector }, this.options)],
          [Paragraph({ formatBlock }), RemoveFormat({ excectAction })],
        ]
      });
      const toolLine3 = ToolsLine({
        groups: [
          [Undo({ excectAction }), Redo({ excectAction })],
          [Copy({ excectAction }), Paste({ excectAction }), Cut({ excectAction })],
          [Link({ addLink }), Image({ addImage })],
          [Code({ toggleCode })]
        ]
      });

      // Create the main container element
      const container = EditorContainer({
        defaultContent,
        toolLines: [toolLine1, toolLine2, toolLine3]
      });
      
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
