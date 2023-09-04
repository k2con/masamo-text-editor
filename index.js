// const masamoEditor = document.querySelector("#masamo-editor");


class MasamoTextEditor {
	constructor(selector, options = {}) {
		try {
			this.editor = document.querySelector(selector);

			// Create the main container element
			const container = document.createElement("div");
			container.classList.add("mte-container");
			
			// Create the tools container
			const toolsContainer = document.createElement("div");
			toolsContainer.classList.add("mte-tools");
			
			// Create the contenteditable div
			const contentEditableDiv = document.createElement("div");
			contentEditableDiv.classList.add("mte-content");
			contentEditableDiv.setAttribute("contenteditable", true);
			contentEditableDiv.innerHTML = "Hello World";
			
			// Append the tools container and contenteditable div to the main container
			container.appendChild(toolsContainer);
			container.appendChild(contentEditableDiv);
			
			// Create the tool lines
			const toolLine1 = this.createToolLine(3);
			const toolLine2 = this.createToolLine();
			const toolLine3 = this.createToolLine();
			
			// Append tool lines to the tools container
			toolsContainer.appendChild(toolLine1);
			toolsContainer.appendChild(toolLine2);
			toolsContainer.appendChild(toolLine3);

			// Create the bold, italic, underline, and strikethrough buttons
			const boldButton = this.createToolButton("bold", "fas fa-bold");
			const italicButton = this.createToolButton("italic", "fas fa-italic");
			const underlineButton = this.createToolButton("underline", "fas fa-underline");
			const strikethroughButton = this.createToolButton("strikethrough", "fas fa-strikethrough");
			
			const toolLine1Group1 = toolLine1.querySelector(".mte-tool-group");
			toolLine1Group1.appendChild(boldButton);
			toolLine1Group1.appendChild(italicButton);
			toolLine1Group1.appendChild(underlineButton);
			toolLine1Group1.appendChild(strikethroughButton);
			
			// Create the alignment buttons
			const leftButton = this.createToolButton("left", "fas fa-align-left");
			const centerButton = this.createToolButton("center", "fas fa-align-center");
			const rightButton = this.createToolButton("right", "fas fa-align-right");
			const justifyButton = this.createToolButton("justify", "fas fa-align-justify");
			
			const toolLine1Group2 = toolLine1.querySelectorAll(".mte-tool-group")[1];
			toolLine1Group2.appendChild(leftButton);
			toolLine1Group2.appendChild(centerButton);
			toolLine1Group2.appendChild(rightButton);
			toolLine1Group2.appendChild(justifyButton);
			
			// Create the list and indent buttons
			const orderedListButton = this.createToolButton("ordered-list", "fas fa-list-ol");
			const unorderedListButton = this.createToolButton("unordered-list", "fas fa-list-ul");
			const outdentButton = this.createToolButton("outdent", "fas fa-outdent");
			const indentButton = this.createToolButton("indent", "fas fa-indent");
			const horizontalRuleButton = this.createToolButton("horizontal-rule", "fas fa-grip-lines");
			
			const toolLine1Group3 = toolLine1.querySelectorAll(".mte-tool-group")[2];
			toolLine1Group3.appendChild(orderedListButton);
			toolLine1Group3.appendChild(unorderedListButton);
			toolLine1Group3.appendChild(outdentButton);
			toolLine1Group3.appendChild(indentButton);
			toolLine1Group3.appendChild(horizontalRuleButton);
			
			// Create the font size selector
			const fontSizeSelector = this.createToolSelector("Font Size", [
				"font-size-1",
				"font-size-2",
				"font-size-3",
				"font-size-4",
				"font-size-5",
				"font-size-6",
				"font-size-7"
			]);
			
			const toolLine2Group1 = toolLine2.querySelector(".mte-tool-group");
			toolLine2Group1.appendChild(fontSizeSelector);
			
			// Create the font family selector
			const fontFamilySelector = this.createToolSelector("Font Family", [
				"font-family-arial",
				"font-family-arial-black",
				"font-family-comic-sans-ms",
				"font-family-courier-new",
				"font-family-georgia",
				"font-family-helvetica",
				"font-family-impact",
				"font-family-times-new-roman",
				"font-family-trebuchet-ms",
				"font-family-verdana",
				"font-family-tahoma",
				"font-family-lucida-console"
			]);
			
			const toolLine2Group2 = toolLine2.querySelectorAll(".mte-tool-group")[1];
			toolLine2Group2.appendChild(fontFamilySelector);
			
			// Create the heading, paragraph, font color, and font background color buttons
			const headingButton = this.createToolButton("heading", "fas fa-heading");
			const paragraphButton = this.createToolButton("paragraph", "fas fa-paragraph");
			const fontColorButton = this.createToolButton("font-color", "fas fa-font");
			const fontBackgroundColorButton = this.createToolButton("font-background-color", "fas fa-highlighter");
			
			const toolLine2Group3 = toolLine2.querySelectorAll(".mte-tool-group")[2];
			toolLine2Group3.appendChild(headingButton);
			toolLine2Group3.appendChild(paragraphButton);
			toolLine2Group3.appendChild(fontColorButton);
			toolLine2Group3.appendChild(fontBackgroundColorButton);
			
			// Create the remove format button
			const removeFormatButton = this.createToolButton("remove-format", "fas fa-eraser");
			
			const toolLine2Group4 = toolLine2.querySelectorAll(".mte-tool-group")[3];
			toolLine2Group4.appendChild(removeFormatButton);
			
			// Create the undo and redo buttons
			const undoButton = this.createToolButton("undo", "fas fa-undo");
			const redoButton = this.createToolButton("redo", "fas fa-redo");
			
			const toolLine4Group1 = toolLine3.querySelector(".mte-tool-group");
			toolLine4Group1.appendChild(undoButton);
			toolLine4Group1.appendChild(redoButton);
			
			// Create the copy, paste, and cut buttons
			const copyButton = this.createToolButton("copy", "fas fa-copy");
			const pasteButton = this.createToolButton("paste", "fas fa-paste");
			const cutButton = this.createToolButton("cut", "fas fa-cut");
			
			const toolLine4Group2 = toolLine3.querySelectorAll(".mte-tool-group")[1];
			toolLine4Group2.appendChild(copyButton);
			toolLine4Group2.appendChild(pasteButton);
			toolLine4Group2.appendChild(cutButton);
			
			// Create the link and image buttons
			const linkButton = this.createToolButton("link", "fas fa-link");
			const imageButton = this.createToolButton("image", "fas fa-image");
			
			const toolLine4Group3 = toolLine3.querySelectorAll(".mte-tool-group")[2];
			toolLine4Group3.appendChild(linkButton);
			toolLine4Group3.appendChild(imageButton);
			
			// Create the code button
			const codeButton = document.createElement("button");
			codeButton.classList.add("mte-tool");
			const codeIcon = document.createElement("i");
			codeIcon.classList.add("fas", "fa-code");
			codeButton.appendChild(codeIcon);
			
			const toolLine4Group4 = toolLine3.querySelectorAll(".mte-tool-group")[3];
			toolLine4Group4.appendChild(codeButton);

			// Append the main container to the editor
			this.editor.appendChild(container);
			

		} catch (error) {
			throw new Error("Please provide a valid selector");
		}
	}
	
	// Function to create a tool line with tool groups
	createToolLine(groups = 4) {
		const toolLine = document.createElement("div");
		toolLine.classList.add("mte-tool-line");

		for (let i = 0; i < groups; i++) {
			const toolGroup = document.createElement("div");
			toolGroup.classList.add("mte-tool-group");
			toolLine.appendChild(toolGroup);
		}

		return toolLine;
	}

	// Function to create a tool button
	createToolButton(dataTool, iconClass) {
		const button = document.createElement("button");
		button.dataset.tool = dataTool;
		button.classList.add("mte-tool");
	
		const icon = document.createElement("i");
		iconClass.split(" ").forEach(className => {
				icon.classList.add(className);
		});
	
		button.appendChild(icon);
	
		return button;
	}
	
	// Function to create a tool selector
	createToolSelector(triggerText, options) {
		const selector = document.createElement("div");
		selector.classList.add("mte-tool-selector");
	
		const triggerButton = document.createElement("button");
		triggerButton.classList.add("mte-tool");
		triggerButton.classList.add("mte-tool-selector-trigger");
		triggerButton.textContent = triggerText;
		triggerButton.addEventListener("click", () => {
			this.showToolSelectorOption(selector);
		});
	
		const optionsContainer = document.createElement("div");
		optionsContainer.classList.add("mte-tool-selector-options");
	
		options.forEach((optionText, index) => {
			const optionButton = document.createElement("button");
			optionButton.classList.add("mte-tool-selector-option");
			optionButton.dataset.tool = options[index];
			optionButton.textContent = optionText;
			optionsContainer.appendChild(optionButton);
		});
	
		selector.appendChild(triggerButton);
		selector.appendChild(optionsContainer);
	
		return selector;
	}

	showToolSelectorOption(selector) {
		console.log(selector);
		selector.querySelector(".mte-tool-selector-options").classList.toggle("mte-show");
	}

	init() {
		const tools = {
			bold: {
				selector: "[data-tool=bold]",
				action: () => {
					document.execCommand("bold");
				}
			},
			italic: {
				selector: "[data-tool=italic]",
				action: () => {
					document.execCommand("italic");
				}
			},
			underline: {
				selector: "[data-tool=underline]",
				action: () => {
					document.execCommand("underline");
				}
			},
			strikethrough: {
				selector: "[data-tool=strikethrough]",
				action: () => {
					document.execCommand("strikethrough");
				}
			},
			// text-align
			left: {
				selector: "[data-tool=left]",
				action: () => {
					document.execCommand("justifyLeft");
				}
			},
			center: {
				selector: "[data-tool=center]",
				action: () => {
					document.execCommand("justifyCenter");
				}
			},
			right: {
				selector: "[data-tool=right]",
				action: () => {
					document.execCommand("justifyRight");
				}
			},
			justify: {
				selector: "[data-tool=justify]",
				action: () => {
					document.execCommand("justifyFull");
				}
			},
			// lists
			orderedList: {
				selector: "[data-tool=ordered-list]",
				action: () => {
					document.execCommand("insertOrderedList");
				}
			},
			unorderedList: {
				selector: "[data-tool=unordered-list]",
				action: () => {
					document.execCommand("insertUnorderedList");
				}
			},
			// indent
			indent: {
				selector: "[data-tool=indent]",
				action: () => {
					document.execCommand("indent");
				}
			},
			outdent: {
				selector: "[data-tool=outdent]",
				action: () => {
					document.execCommand("outdent");
				}
			},
			// horizontal rule
			horizontalRule: {
				selector: "[data-tool=horizontal-rule]",
				action: () => {
					document.execCommand("insertHorizontalRule");
				}
			},
			// format
			heading: {
				selector: "[data-tool=heading]",
				action: () => {
					document.execCommand("formatBlock", false, "h1");
				}
			},
			paragraph: {
				selector: "[data-tool=paragraph]",
				action: () => {
					document.execCommand("formatBlock", false, "p");
				}
			},
			// font size
			fontSize1: {
				selector: "[data-tool=font-size-1]",
				action: () => {
					document.execCommand("fontSize", false, "1");
				}
			},
			fontSize2: {
				selector: "[data-tool=font-size-2]",
				action: () => {
					document.execCommand("fontSize", false, "2");
				}
			},
			fontSize3: {
				selector: "[data-tool=font-size-3]",
				action: () => {
					document.execCommand("fontSize", false, "3");
				}
			},
			fontSize4: {
				selector: "[data-tool=font-size-4]",
				action: () => {
					document.execCommand("fontSize", false, "4");
				}
			},
			fontSize5: {
				selector: "[data-tool=font-size-5]",
				action: () => {
					document.execCommand("fontSize", false, "5");
				}
			},
			fontSize6: {
				selector: "[data-tool=font-size-6]",
				action: () => {
					document.execCommand("fontSize", false, "6");
				}
			},
			fontSize7: {
				selector: "[data-tool=font-size-7]",
				action: () => {
					document.execCommand("fontSize", false, "7");
				}
			},
			// font color
			fontColor: {
				selector: "[data-tool=font-color]",
				action: () => {
					document.execCommand("foreColor", false, "#ff0000");
				}
			},
			// font background color
			fontBackgroundColor: {
				selector: "[data-tool=font-background-color]",
				action: () => {
					document.execCommand("backColor", false, "#ff0000");
				}
			},
			// font family
			fontFamilyArial: {
				selector: "[data-tool=font-family-arial]",
				action: () => {
					document.execCommand("fontName", false, "Arial");
				}
			},
			fontFamilyArialBlack: {
				selector: "[data-tool=font-family-arial-black]",
				action: () => {
					document.execCommand("fontName", false, "Arial Black");
				}
			},
			fontFamilyCourierNew: {
				selector: "[data-tool=font-family-courier-new]",
				action: () => {
					document.execCommand("fontName", false, "Courier New");
				}
			},
			fontFamilyGeorgia: {
				selector: "[data-tool=font-family-georgia]",
				action: () => {
					document.execCommand("fontName", false, "Georgia");
				}
			},
			fontFamilyHelvetica: {
				selector: "[data-tool=font-family-helvetica]",
				action: () => {
					document.execCommand("fontName", false, "Helvetica");
				}
			},
			fontFamilyImpact: {
				selector: "[data-tool=font-family-impact]",
				action: () => {
					document.execCommand("fontName", false, "Impact");
				}
			},
			fontFamilyLucidaConsole: {
				selector: "[data-tool=font-family-lucida-console]",
				action: () => {
					document.execCommand("fontName", false, "Lucida Console");
				}
			},
			fontFamilyTahoma: {
				selector: "[data-tool=font-family-tahoma]",
				action: () => {
					document.execCommand("fontName", false, "Tahoma");
				}
			},
			fontFamilyTimesNewRoman: {
				selector: "[data-tool=font-family-times-new-roman]",
				action: () => {
					document.execCommand("fontName", false, "Times New Roman");
				}
			},
			fontFamilyTrebuchetMS: {
				selector: "[data-tool=font-family-trebuchet-ms]",
				action: () => {
					document.execCommand("fontName", false, "Trebuchet MS");
				}
			},
			fontFamilyVerdana: {
				selector: "[data-tool=font-family-verdana]",
				action: () => {
					document.execCommand("fontName", false, "Verdana");
				}
			},
			fontFamilyComicSansMS: {
				selector: "[data-tool=font-family-comic-sans-ms]",
				action: () => {
					document.execCommand("fontName", false, "Comic Sans MS");
				}
			},
			// link
			link: {
				selector: "[data-tool=link]",
				action: () => {
					const url = prompt("Enter the link here: ", "https://");
					document.execCommand("createLink", false, url);
				}
			},
			// image
			image: {
				selector: "[data-tool=image]",
				action: () => {
					const url = prompt("Enter the image URL here: ", "https://");
					document.execCommand("insertImage", false, url);
				}
			},
			// remove format
			removeFormat: {
				selector: "[data-tool=remove-format]",
				action: () => {
					document.execCommand("removeFormat");
				}
			},
			// undo/redo
			undo: {
				selector: "[data-tool=undo]",
				action: () => {
					document.execCommand("undo");
				}
			},
			redo: {
				selector: "[data-tool=redo]",
				action: () => {
					document.execCommand("redo");
				}
			},
			// cut/copy/paste
			cut: {
				selector: "[data-tool=cut]",
				action: () => {
					document.execCommand("cut");
				}
			},
			copy: {
				selector: "[data-tool=copy]",
				action: () => {
					document.execCommand("copy");
				}
			},
			paste: {
				selector: "[data-tool=paste]",
				action: () => {
					document.execCommand("paste");
				}
			},
			// show html
			code: {
				selector: "[data-tool=code]",
				action: () => {
					const html = this.editor.querySelector(".mte-content").innerHTML;
					console.log(html);
				}
			}
		}
		
		Object.keys(tools).forEach(tool => {
			this.editor.querySelector(tools[tool].selector).addEventListener("click", tools[tool].action);
		});
	}

	execCommand(command, value = null) {
		document.execCommand(command, false, value);
	}
}

const masamoEditor = new MasamoTextEditor("#masamo-editor");
masamoEditor.init();

// define vars
const editor = document.getElementsByClassName('wp-webdeasy-comment-editor')[0];
const toolbar = editor.getElementsByClassName('toolbar')[0];
const buttons = toolbar.querySelectorAll('.editor-btn:not(.has-submenu)');
const contentArea = editor.getElementsByClassName('content-area')[0];
const visuellView = contentArea.getElementsByClassName('visuell-view')[0];
const htmlView = contentArea.getElementsByClassName('html-view')[0];
const modal = document.getElementsByClassName('modal')[0];

// add active tag event
document.addEventListener('selectionchange', selectionChange);

// add paste event
visuellView.addEventListener('paste', pasteEvent);

// add paragraph tag on new line
contentArea.addEventListener('keypress', addParagraphTag);

// add toolbar button actions
for(let i = 0; i < buttons.length; i++) {
  let button = buttons[i];
  
  button.addEventListener('click', function(e) {
    let action = this.dataset.action;
    
    switch(action) {
      case 'toggle-view':
        execCodeAction(this, editor);
        break;
      case 'createLink':
        execLinkAction();
        break;
      default:
        execDefaultAction(action);
    }
    
  });
}

/** 
 * This function toggles between visual and html view
 */
function execCodeAction(button, editor) {

  if(button.classList.contains('active')) { // show visuell view
    visuellView.innerHTML = htmlView.value;
    htmlView.style.display = 'none';
    visuellView.style.display = 'block';

    button.classList.remove('active');     
  } else {  // show html view
    htmlView.innerText = visuellView.innerHTML;
    visuellView.style.display = 'none';
    htmlView.style.display = 'block';

    button.classList.add('active'); 
  }
}

/**
 * This function adds a link to the current selection
 */
function execLinkAction() {  
  modal.style.display = 'block';
  let selection = saveSelection();

  let submit = modal.querySelectorAll('button.done')[0];
  let close = modal.querySelectorAll('.close')[0];
  
  // done button active => add link
  submit.addEventListener('click', function(e) {
    e.preventDefault();
    let newTabCheckbox = modal.querySelectorAll('#new-tab')[0];
    let linkInput = modal.querySelectorAll('#linkValue')[0];
    let linkValue = linkInput.value;
    let newTab = newTabCheckbox.checked;    
    
    restoreSelection(selection);
    
    if(window.getSelection().toString()) {
      let a = document.createElement('a');
      a.href = linkValue;
      if(newTab) a.target = '_blank';
      window.getSelection().getRangeAt(0).surroundContents(a);
    }

    modal.style.display = 'none';
    linkInput.value = '';
    
    // deregister modal events
    submit.removeEventListener('click', arguments.callee);
    close.removeEventListener('click', arguments.callee);
  });  
  
  // close modal on X click
  close.addEventListener('click', function(e) {
    e.preventDefault();
    let linkInput = modal.querySelectorAll('#linkValue')[0];
    
    modal.style.display = 'none';
    linkInput.value = '';
    
    // deregister modal events
    submit.removeEventListener('click', arguments.callee);
    close.removeEventListener('click', arguments.callee);
  });
}

/**
 * This function executes all 'normal' actions
 */
function execDefaultAction(action) {
  document.execCommand(action, false);
}

/**
 * Saves the current selection
 */
function saveSelection() {
    if(window.getSelection) {
        sel = window.getSelection();
        if(sel.getRangeAt && sel.rangeCount) {
            let ranges = [];
            for(var i = 0, len = sel.rangeCount; i < len; ++i) {
                ranges.push(sel.getRangeAt(i));
            }
            return ranges;
        }
    } else if (document.selection && document.selection.createRange) {
        return document.selection.createRange();
    }
    return null;
}

/**
 *  Loads a saved selection
 */
function restoreSelection(savedSel) {
    if(savedSel) {
        if(window.getSelection) {
            sel = window.getSelection();
            sel.removeAllRanges();
            for(var i = 0, len = savedSel.length; i < len; ++i) {
                sel.addRange(savedSel[i]);
            }
        } else if(document.selection && savedSel.select) {
            savedSel.select();
        }
    }
}

/**
 * Sets the current selected format buttons active/inactive
 */ 
function selectionChange(e) {
  
  for(let i = 0; i < buttons.length; i++) {
    let button = buttons[i];
    
    // don't remove active class on code toggle button
    if(button.dataset.action === 'toggle-view') continue;
    
    button.classList.remove('active');
  }
  
  if(!childOf(window.getSelection().anchorNode.parentNode, editor)) return false;
  
  parentTagActive(window.getSelection().anchorNode.parentNode);
}

/**
 * Checks if the passed child has the passed parent
 */
function childOf(child, parent) {
  return parent.contains(child);
}

/**
 * Sets the tag active that is responsible for the current element
 */
function parentTagActive(elem) {
  if(!elem ||!elem.classList || elem.classList.contains('visuell-view')) return false;
  
  let toolbarButton;
  
  // active by tag names
  let tagName = elem.tagName.toLowerCase();
  toolbarButton = document.querySelectorAll(`.toolbar .editor-btn[data-tag-name="${tagName}"]`)[0];
  if(toolbarButton) {
    toolbarButton.classList.add('active');
  }
  
  // active by text-align
  let textAlign = elem.style.textAlign;
  toolbarButton = document.querySelectorAll(`.toolbar .editor-btn[data-style="textAlign:${textAlign}"]`)[0];
  if(toolbarButton) {
    toolbarButton.classList.add('active');
  }
  
  return parentTagActive(elem.parentNode);
}

/**
 * Handles the paste event and removes all HTML tags
 */
function pasteEvent(e) {
  e.preventDefault();
  
  let text = (e.originalEvent || e).clipboardData.getData('text/plain');
  document.execCommand('insertHTML', false, text);
}

/**
 * This functions adds a paragraph tag when the enter key is pressed
 */
function addParagraphTag(evt) {
  if (evt.keyCode == '13') {
    
    // don't add a p tag on list item
    if(window.getSelection().anchorNode.parentNode.tagName === 'LI') return;
    document.execCommand('formatBlock', false, 'p');
  }
}



